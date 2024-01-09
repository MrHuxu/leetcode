const { expect } = require('chai');

/**
 * @param {string} instructions
 * @return {boolean}
 */
let isRobotBounded = function(instructions) {
  const init = [0, 0];
  let dire = [0, 1];
  const turn = (pre, direction) => {
    if (0 === pre[0] && 1 === pre[1]) {
      if ('L' === direction) return [-1, 0];
      else return [1, 0];
    } else if (0 === pre[0] && -1 === pre[1]) {
      if ('L' === direction) return [1, 0];
      else return [-1, 0];
    } else if (-1 === pre[0] && 0 === pre[1]) {
      if ('L' === direction) return [0, -1];
      else return [0, 1];
    } else {
      if ('L' === direction) return [0, 1];
      else return [0, -1];
    }
  };

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] !== 'G') dire = turn(dire, instructions[i]);
    else {
      init[0] += dire[0];
      init[1] += dire[1];
    }
  }

  if (0 === init[0] && 0 === init[1]) {
    return true;
  }

  return !(0 === dire[0] && 1 === dire[1]);
};

it('robot-bounded-in-circle', () => {
  expect(isRobotBounded('GGLLGG')).to.be.true;
  expect(isRobotBounded('GG')).to.be.false;
  expect(isRobotBounded('GL')).to.be.true;
  expect(isRobotBounded('LLGRL')).to.be.true;
  expect(isRobotBounded('LRRRRLLLRL')).to.be.true;
});