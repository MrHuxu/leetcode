const { writeFileSync, closeSync, openSync } = require('fs');
const { execSync } = require('child_process');
const { resolve } = require('path');
const { get } = require('request');
const { load } = require('cheerio');
const { prompt } = require('inquirer');
const { info } = require('better-console');

const { clearConsole, traverseNode, unicodeToChar, createFiles } = require('./file-utils.js');

const ALGORITHM_URL = `https://leetcode.com/api/problems/algorithms/`;
const QUESTION_URL = slug => `https://leetcode.com/problems/${slug}/`;
const SUBMISSION_PATH = slug => resolve(__dirname, `../problems/*${slug}/index.js`);

const difficultyMap = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

const questionTitle = question => {
  let { difficulty, paid_only, stat } = question;
  let { question_id, question__title, total_acs, total_submitted } = stat;
  let { level } = question.difficulty;
  return `${question_id}\t${difficultyMap[level]}\t${(total_acs / total_submitted * 100).toString().slice(0, 4)}%\t${question__title}`;
};

const questionOption = question => {
  let { paid_only, stat } = question;
  if (paid_only) return { name: questionTitle(question), disabled: 'Paid only' };

  let { question__article__slug, question__title_slug } = stat;
  let slug = question__title_slug || question__article__slug;
  try {
    execSync(`ls ${SUBMISSION_PATH(slug)}`, { stdio: 'ignore' });
    return { name: questionTitle(question), disabled: 'Solved' };
  } catch (e) {
    return questionTitle(question);
  };
};

const mapTitleToQuestion = questions => questions.reduce((pre, curr) => {
  pre[questionTitle(curr)] = curr;
  return pre;
}, {});

const getQuestions = url => new Promise((resolve, reject) => {
  get(url).on('response', res => {
    res.setEncoding('utf8');
    let chunk = '';
    res.on('data', data => chunk += data);
    res.on('error', err => reject(err));
    res.on('end', () => resolve(JSON.parse(chunk).stat_status_pairs));
  });
});

const showQuestionSelection = questions => {
  titleQuestionMap = mapTitleToQuestion(questions);
  return prompt({
    type    : 'list',
    name    : 'title',
    message : 'Which problem do you want to solve?',
    choices : questions.map(questionOption)
  });
};

const getInfosFromPagedata = $ => {
  eval($('script').toArray().find(elem => {
    return elem.children.length && elem.children[0].data.includes('pageData');
  }).children[0].data);

  return {
    slug        : pageData.questionTitleSlug,
    code        : '',
    /*
     * pageData.codeDefinition.find(definition => 'javascript' === definition.value).defaultCode,
     * it won't work anymore since leetcode now use graphql to load code
     * definition dynamically and all the requests need to be authenticated
     */
    description : $('meta[name=description]')[0].attribs['content']
  };
};

const getQuestionContent = title => new Promise((resolve, reject) => {
  let question = titleQuestionMap[title];
  let { question__article__slug, question__title_slug } = question.stat;
  let selectedQuestionSlug = question__title_slug || question__article__slug;
  get(QUESTION_URL(selectedQuestionSlug)).on('response', res => {
    let chunk = '';
    res.on('data', data => chunk += data);
    res.on('error', err => reject(err));
    res.on('end', () => {
      resolve(getInfosFromPagedata(load(chunk)));
    });
  });
});

const actionToQuestion = question => {
  let { slug, code, description } = question;
  info(`\n${description}`);
  prompt({
    type    : 'list',
    name    : 'action',
    message : 'Do you want to solve the problem?',
    choices : ['Yes', 'No']
  }).then(answer => {
    switch (answer.action) {
    case 'Yes':
      createFiles(slug, code);
      return;

    case 'No':
      SelectAndSolve();
      return;

    default:
      return;
    }
  });
};

const SelectAndSolve = () => {
  clearConsole();
  getQuestions(ALGORITHM_URL).then(
    questions => showQuestionSelection(questions),
    err => Promise.reject(err)
  ).then(
    answer => getQuestionContent(answer.title),
    err => Promise.reject(err)
  ).then(
    question => actionToQuestion(question)
  );
};

SelectAndSolve();
