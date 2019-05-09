const { expect } = require('chai');

/**
 * @param {string[]} words
 */
let StreamChecker = function(words) {
  function Node() {
    this.next = {};
    this.finish = false;
  }

  this.root = new Node(null);
  for (let word of words) {
    let tmp = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!tmp.next[word[i]]) {
        tmp.next[word[i]] = new Node();
      }

      tmp = tmp.next[word[i]];
      if (i === word.length - 1) tmp.finish = true;
    }
  }
  this.curr = [];
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  const nextCurr = [];
  let found = false;
  for (let c of [...this.curr, this.root]) {
    if (c.next[letter]) {
      nextCurr.push(c.next[letter]);
      if (c.next[letter].finish) found = true;
    }
  }
  this.curr = nextCurr;
  return found;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

const streamChecker = new StreamChecker(['cd','f','kl']);
console.log(JSON.stringify(streamChecker.root));

const sc2 = new StreamChecker(['ab', 'ba', 'aaab', 'abab', 'baa']);
console.log(JSON.stringify(sc2.root));

const sc3 = new StreamChecker(['abaa','abaab','aabbb','bab','ab']);
console.log(JSON.stringify(sc3.root));

it('stream-of-characters', () => {
  expect(streamChecker.query('a')).to.eq(false);
  expect(streamChecker.query('b')).to.eq(false);
  expect(streamChecker.query('c')).to.eq(false);
  expect(streamChecker.query('d')).to.eq(true );
  expect(streamChecker.query('e')).to.eq(false);
  expect(streamChecker.query('f')).to.eq(true );
  expect(streamChecker.query('g')).to.eq(false);
  expect(streamChecker.query('h')).to.eq(false);
  expect(streamChecker.query('i')).to.eq(false);
  expect(streamChecker.query('j')).to.eq(false);
  expect(streamChecker.query('k')).to.eq(false);
  expect(streamChecker.query('l')).to.eq(true );

  expect(sc2.query('a')).to.eq(false);
  expect(sc2.query('a')).to.eq(false);
  expect(sc2.query('a')).to.eq(false);
  expect(sc2.query('a')).to.eq(false);
  expect(sc2.query('a')).to.eq(false);
  expect(sc2.query('b')).to.eq(true);
  expect(sc2.query('a')).to.eq(true);

  expect(sc3.query('a')).to.eq(false);
  expect(sc3.query('a')).to.eq(false);
  expect(sc3.query('b')).to.eq(true);
});