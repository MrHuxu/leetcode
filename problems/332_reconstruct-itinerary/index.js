/**
 * Problem: https://leetcode.com/problems/reconstruct-itinerary/description/
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  tickets.sort(function (ticket1, ticket2) {
    if (ticket1[0] === ticket2[0])
      return ticket1[1] < ticket2[1] ? 1 : -1;
    else
      return ticket1[0] < ticket2[0] ? 1 : -1;
  });

  var ticketMap = tickets.reduce(function (prev, cur, index, arr) {
    if (prev[cur[0]])
      prev[cur[0]].push(cur);
    else
      prev[cur[0]] = [cur];
    return prev;
  }, {});

  var result = [];
  var dfs = function (station) {
    while (ticketMap[station] && ticketMap[station].length) {
      dfs(ticketMap[station].pop()[1]);
    }
    result.push(station);
  };
  dfs('JFK');

  return result.reverse();
};
module.exports = findItinerary;
