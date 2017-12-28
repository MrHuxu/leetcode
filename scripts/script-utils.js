const { resolve } = require('path');
const { get } = require('request');

const ALGORITHM_URL = 'https://leetcode.com/api/problems/algorithms/';
const PROBLEMS_PATH = resolve(__dirname, '..', 'problems');
const README_BASE_PATH = resolve(__dirname, 'readme-base.txt');
const README_PATH = resolve(__dirname, '..', 'README.md');

const questionUrl = slug => `https://leetcode.com/problems/${slug}/`;

const DIFFICULTY_MAP = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

const formatId = id => {
  id = id.toString();
  while (id.length < 3) id = '0' + id;
  return id;
};

const problemPath = (id, slug) => resolve(__dirname, `../problems/${formatId(id)}_${slug}`);
const submissionPath = (id, slug) => resolve(__dirname, `../problems/${id}_*${slug}/index.js`);

const clearConsole = () => process.stdout.write(
  'win32' === process.platform ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
);

const getQuestionsDetails = () => new Promise((resolve, reject) => {
  get(ALGORITHM_URL).on('response', res => {
    res.setEncoding('utf8');
    let chunk = '';
    res.on('data', data => chunk += data);
    res.on('error', err => reject(err));
    res.on('end', () => {
      resolve(JSON.parse(chunk).stat_status_pairs.map(pair => {
        const { stat, paid_only: paidOnly, difficulty } = pair;
        const {
          question__article__slug, question__title_slug, frontend_question_id,
          question__title: title,
          total_acs: totalAcs,
          total_submitted: totalSubmitted
        } = stat;
        const { level } = difficulty;
        return {
          paidOnly, title, totalAcs, totalSubmitted,
          id         : frontend_question_id,
          difficulty : level,
          slug       : question__article__slug || question__title_slug 
        };
      }));
    });
  });
});

module.exports = {
  ALGORITHM_URL,
  PROBLEMS_PATH,
  README_BASE_PATH,
  README_PATH,
  DIFFICULTY_MAP,

  questionUrl,
  problemPath,
  submissionPath,
  formatId,
  clearConsole,
  getQuestionsDetails
};
