const { expect } = require('chai');

/**
 * @param {string} target
 * @return {string}
 */
let alphabetBoardPath = function(target) {
  const letters = {};
  for (let i = 97; i <= 122; i++) {
    letters[String.fromCharCode(i)] = [
      parseInt((i - 97) / 5), (i - 97) % 5
    ];
  }
  
  const pos = [0, 0];
  let result = '';
  for (let i = 0; i < target.length; i++) {
    const letter = target[i];

    if (letters[letter][0] === pos[0] && letters[letter][1] === pos[1]) {
      result += '!';
      continue;
    }

    const subX = letters['z' === letter ? 'u' : letter][0] - pos[0];
    const subY = letters['z' === letter ? 'u' : letter][1] - pos[1];

    if (subX > 0) {
      for (let i = 0; i < subX; i++) result += 'D';
    } else if (subX < 0) {
      for (let i = 0; i < -subX; i++) result += 'U';
    }

    if (subY > 0) {
      for (let i = 0; i < subY; i++) result += 'R';
    } else if (subY < 0) {
      for (let i = 0; i < -subY; i++) result += 'L';
    }

    result += ('z' === letter ? 'D' : '') + '!';
    pos[0] = letters[letter][0];
    pos[1] = letters[letter][1];
  }

  return result;
};

it('alphabet-board-path', () => {
  expect(alphabetBoardPath('leet')).to.eq('DDR!UURRR!!DDD!');
  expect(alphabetBoardPath('code')).to.eq('RR!DDRR!UUL!R!');
  expect(alphabetBoardPath('zdz')).to.eq('DDDDD!UUUUURRR!DDDDLLLD!');
});