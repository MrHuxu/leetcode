module.exports = [{
  input  : [[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]],
  output : ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']
}, {
  input  : [[["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]],
  output : ['JFK', 'NRT', 'JFK', 'KUL']
}];
