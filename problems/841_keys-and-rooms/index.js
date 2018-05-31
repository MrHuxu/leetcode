/**
 * Problem: https://leetcode.com/problems/keys-and-rooms/description/
 */

const keysAndRooms = rooms => {
  const remain = {};
  for (let i = 1; i < rooms.length; i++) remain[i] = true;

  const dfs = (remain, keys) => {
    if (!Object.keys(remain).length) return true;

    for (let key of keys) {
      if (remain[key]) {
        delete remain[key];
        const res = dfs(remain, rooms[key]);
        if (res) return res;
      }
    }
    return false;
  };
  return dfs(remain, rooms[0]);
};

module.exports = keysAndRooms;
