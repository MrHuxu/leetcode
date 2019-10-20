const { expect } = require('chai');

/**
 * @param {string[]} folder
 * @return {string[]}
 */
let removeSubfolders = function(folder) {
  const root = new folderNode();

  for (let f of folder) {
    const names = f.split('/').slice(1);

    let tmp = root;
    for (let name of names) {
      if (tmp.next[name] === undefined) {
        tmp.next[name] = new folderNode(name);
      }
      tmp = tmp.next[name];
    }
    tmp.terminated = true;
  }

  const result = [];

  const traverse = (node, pre) => {
    if (node.terminated) {
      result.push(pre);
      return;
    }

    for (let name in node.next) {
      traverse(node.next[name], pre + '/' + name);
    }
  };
  traverse(root, '');

  return result;
};

const folderNode = function(name) {
  this.name = name;
  this.terminated = false;
  this.next = {};
};

it('remove-sub-folders-from-the-filesystem', () => {
  expect(removeSubfolders(['/a','/a/b','/c/d','/c/d/e','/c/f'])).to.deep.eq(['/a','/c/d','/c/f']);
});