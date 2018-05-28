const { readdir, readFileSync, writeFileSync } = require('fs');
const { info } = require('better-console');

const { PROBLEMS_PATH, README_BASE_PATH, README_PATH, DIFFICULTY_MAP, getQuestionsDetails, formatId, questionUrl } = require('./script-utils');

const getSolvedQuestionIds = () => new Promise(resolve => {
  readdir(PROBLEMS_PATH, {}, (_, problems) => {
    resolve(problems.map(problem => parseInt(problem.split('_')[0])));
  });
});

const getQuestionInfos = ids => new Promise(resolve => {
  info(`${ids.length} questions resolved\n`);
  info('Start regenerating...');
  const idExist = ids.reduce((pre, id) => {
    pre[id] = true;
    return pre;
  }, {});
  getQuestionsDetails().then(questions => {
    resolve(questions.filter(question => idExist[question.id]).reverse());
  });
});

const getQuestionsTableContent = questions => questions.reduce(([items, links], question) => {
  const { id, title, difficulty, slug } = question;
  const questionUrlNum = id * 2 - 1;
  const submissionUrlNum = id * 2;
  const dirName = `${formatId(id)}_${slug}`;

  return [
    [...items, `\n| ${id} | [${title}][${questionUrlNum}] | ${DIFFICULTY_MAP[difficulty]} | [${dirName}][${submissionUrlNum}] |`],
    [...links, `\n[${questionUrlNum}]: ${questionUrl(slug)}\n[${submissionUrlNum}]: https://github.com/MrHuxu/leetcode/blob/master/problems/${dirName}/index.js`]
  ];
}, [
  ['| Sequence | Title | Difficulty | Submission |\n| - | :- | :-: | :- |'],
  []
]);

regenerateReadme = questions => {
  const [tableItems, questionLinks] = getQuestionsTableContent(questions);
  
  const basicContent = readFileSync(README_BASE_PATH);
  const submissionContent = tableItems.join('') + '\n' + questionLinks.join('');
  writeFileSync(README_PATH, `${basicContent}\n${submissionContent}`);
  info('\nRegenerate README.md done!');
};

getSolvedQuestionIds().then(
  ids => getQuestionInfos(ids),
  err => Promise.reject(err)
).then(
  questions => regenerateReadme(questions),
  err => Promise.reject(err)
);