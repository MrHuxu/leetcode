/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
let isLongPressedName = function(name, typed) {
  for (let i = 0, j = 0; i < name.length; i++) {
    if (name[i] === typed[j]) {
      j++;
    } else {
      while (typed[j] === name[i - 1]) j++;
      if (name[i] === typed[j]) j++;
      else return false;
    }
  }

  return true;
};