/**
 * Problem: https://leetcode.com/problems/network-delay-time/description/
 */
/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

const networkDelayTime = (times, N, K) => {
  const edges = times.reduce((pre, time) => {
    pre[time[0]] = { ...(pre[time[0]] || {}), [time[1]]: time[2] };
    return pre;
  }, {});

  const dis = {};
  for (let i = 1; i <= N; i++) {
    dis[i] = i === K ? 0 : Number.MAX_SAFE_INTEGER;
  }

  let nodes = [];
  for (let i = 1; i <= N; i++) nodes.push(i);

  while (nodes.length) {
    let index, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
      if (dis[nodes[i]] < min) {
        min = dis[nodes[i]];
        index = i;
      }
    }

    const node = nodes[index];
    if (edges[node]) {
      for (let dest of Object.keys(edges[node])) {
        if (dis[dest] > dis[node] + edges[node][dest])
          dis[dest] = dis[node] + edges[node][dest];
      }
    }
    nodes.splice(index, 1);
  }

  let res = Number.MIN_SAFE_INTEGER;
  for (let key in dis) {
    if (dis[key] === Number.MAX_SAFE_INTEGER)
      return -1;
    res = Math.max(dis[key], res);
  }
  return res;
};

module.exports = networkDelayTime;
