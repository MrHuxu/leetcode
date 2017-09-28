var calcEquation = function(equations, values, queries) {
  var valueMap = {};
  var ids = {};
  for (var i = 0; i < equations.length; ++i) {
    ids[equations[i][0]] = ids[equations[i][1]] = true;

    if (!valueMap[equations[i][0]]) valueMap[equations[i][0]] = {};
    valueMap[equations[i][0]][equations[i][0]] = 1;
    valueMap[equations[i][0]][equations[i][1]] = values[i];

    if (!valueMap[equations[i][1]]) valueMap[equations[i][1]] = {};
    valueMap[equations[i][1]][equations[i][1]] = 1;
  }
  ids = Object.keys(ids);

  for (var i = 0; i < ids.length; ++i) {
    for (var j = 0; j < ids.length; ++j) {
      for (var k = j; k < ids.length; ++k) {
        var num1 = valueMap[ids[j]][ids[i]] ? valueMap[ids[j]][ids[i]] : (valueMap[ids[i]][ids[j]] ? 1 / valueMap[ids[i]][ids[j]] : undefined);
        var num2 = valueMap[ids[i]][ids[k]] ? valueMap[ids[i]][ids[k]] : (valueMap[ids[k]][ids[i]] ? 1 / valueMap[ids[k]][ids[i]] : undefined);
        if (num1 && num2) valueMap[ids[j]][ids[k]] = num1 * num2;
      }
    }
  }

  var result = [];
  queries.forEach(function (q) {
    if (valueMap[q[0]] && valueMap[q[0]][q[1]]) {
      result.push(valueMap[q[0]][q[1]]);
    } else if (valueMap[q[1]] &&valueMap[q[1]][q[0]]) {
      result.push(1 / valueMap[q[1]][q[0]]);
    } else {
      result.push(-1.0);
    }
  });

  return result;
};

console.log(calcEquation([ ["a", "b"], ["b", "c"] ], [2.0, 3.0], [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]));

console.log(calcEquation([["x1","x2"],["x2","x3"],["x1","x4"],["x2","x5"]],
  [3.0,0.5,3.4,5.6],
  [["x2","x4"],["x1","x5"],["x1","x3"],["x5","x5"],["x5","x1"],["x3","x4"],["x4","x3"],["x6","x6"],["x0","x0"]]));