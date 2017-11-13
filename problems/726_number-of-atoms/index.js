/**
 * Problem: https://leetcode.com/problems/number-of-atoms/description/
 */
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  formula += ' ';
  let stack = [];
  let atom = '', times = '';
  
  for (let i = 0; i < formula.length; i++) {
    const ch = formula[i], charCode = ch.charCodeAt();

    if (charCode >= 48 && charCode <= 57) {
      if (atom.length) {
        stack.push({ atom, times: 1 });
        atom = '';
      };
      times += ch;
    } else {
      if (times.length) {
        times = parseInt(times);
        const tmp = [];
        if (')' === stack[stack.length - 1]) {
          stack.pop();
          while (stack[stack.length - 1] !== '(') {
            const a = stack.pop();
            tmp.unshift({ atom: a.atom, times: a.times * times });
          }
          stack.pop();
          stack = [...stack, ...tmp];
        } else {
          const a = stack.pop();
          stack.push({ atom: a.atom, times: a.times * times });
        }
        times = '';
        atom = '';
      }

      if (charCode >= 65 && charCode <= 90) {
        if (!times.length && atom.length) stack.push({ atom, times: 1 });
        atom = ch;
      } else if (charCode >= 97 && charCode <= 122) {
        atom += ch;
        stack.push({ atom, times: 1 });
        atom = '';
      } else {
        if (atom.length) {
          stack.push({ atom, times: 1 });
          atom = '';
        }
        if ('(' === ch || ')' === ch) stack.push(ch);
      }
    }
  }

  const mapAtomToTimes = stack.reduce((pre, item) => {
    if (pre[item.atom]) {
      pre[item.atom] += item.times;
    } else {
      pre[item.atom] = item.times;
    }

    return pre;
  }, {});

  return Object.keys(mapAtomToTimes).sort().reduce((str, atom) => {
    return str += atom + (1 === mapAtomToTimes[atom] ? '' : mapAtomToTimes[atom]);
  }, '');
};

module.exports = countOfAtoms;
