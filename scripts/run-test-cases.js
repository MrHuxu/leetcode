const { resolve } = require('path');
const { readdirSync } = require('fs');
const { expect } = require('chai');

const PROBLEMS_DIR = resolve(__dirname, '../problems');
const problems = readdirSync(PROBLEMS_DIR);

problems.forEach(problem => {
  const program = require(resolve(PROBLEMS_DIR, problem, 'index'));
  const testCases = require(resolve(PROBLEMS_DIR, problem, 'test-cases'));
  describe(problem, () => {
    testCases.forEach(testCase => {
      const { input, output } = testCase;
      it (`Input: ${JSON.stringify(input)}\t Output: ${JSON.stringify(output)}`, () => {
        expect(program.apply(null, input)).to.deep.equal(output);
      });
    });
  });
});