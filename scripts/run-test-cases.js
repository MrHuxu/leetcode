const { resolve } = require('path');
const { readdirSync } = require('fs');
const { expect } = require('chai');

const PROBLEMS_DIR = resolve(__dirname, '../problems');

const getTestProblems = testNum => readdirSync(PROBLEMS_DIR).filter(p => p.startsWith(testNum));

const getTestProblemNum = () => {
  let problemNum = process.argv[process.argv.length - 1];
  if (/[0-9]+/.test(problemNum)) {
    const len = problemNum.length;
    for (let i = 0; i < 3 - len; ++i) {
      problemNum = '0' + problemNum;
    }
    return problemNum;
  } else {
    return '';
  }
};

const testGenerator = pending => {
  return (description, func) => {
    (pending ? xit : it) (description, func);
  };
};

const testMutateInput = (pending, program, input, output) => testGenerator(pending)(
  `Input: ${JSON.stringify(input).slice(0, 66)}\tshould be modified to\tOutput: ${JSON.stringify(output)}`,
  () => {
    program(...input);
    expect(input).to.deep.equal(output);
  }
);

const testByFunc = (pending, func, input, output) => testGenerator(pending)(
  `Func: ${func.name}\nInput: ${(JSON.stringify(input) || '').slice(0, 66)}\t Output: ${JSON.stringify(output)}`,
  () => expect(func(...input)).to.deep.equal(output)
);

const testWithoutOrder = (pending, program, input, output) => testGenerator(pending)(
  `Input: ${JSON.stringify(input).slice(0, 66)}\tshould match the content of \tOutput: ${JSON.stringify(output)}`,
  () => expect(program(...input)).to.deep.include(...output)
);

const testInput = (pending, program, input, output) => testGenerator(pending)(
  `Input: ${JSON.stringify(input).slice(0, 66)}\t Output: ${JSON.stringify(output)}`,
  () => expect(program(...input)).to.deep.equal(output)
);

const executeCase = problem => {
  const program = require(resolve(PROBLEMS_DIR, problem, 'index'));
  const testCases = require(resolve(PROBLEMS_DIR, problem, 'test-cases'));
  describe(problem, () => {
    testCases.forEach(testCase => {
      const { mutate, func, noOrder, pending, input, output } = testCase;

      if (mutate) testMutateInput(pending, program, input, output);
      else if (func) testByFunc(pending, func, input, output);
      else if (noOrder) testWithoutOrder(pending, program, input, output);
      else testInput(pending, program, input, output);
    });
  });
};

const testProblems = problems => problems.forEach(executeCase);

testProblems(getTestProblems(getTestProblemNum()));