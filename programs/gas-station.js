var canCompleteCircuit = function(gas, cost) {
  var gasSum =0, costSum = 0;
  var len = gas.length;
  var result = 0;

  for (var i = 0; i < len; ++i) {
    gasSum += gas[i];
    costSum += cost[i];
  }

  if (costSum > gasSum)
    return -1;
  else {
    gasSum = costSum = 0;
    for (var i = 0; i < len; ++i) {
      gasSum += gas[i];
      costSum += cost[i];
      if (costSum > gasSum) {
        gasSum = 0;
        costSum = 0;
        result = i + 1;
      }
    }
  }

  return result;
};

console.log(canCompleteCircuit([1, 2, 3, 4], [2, 3, 4, 5]));
console.log(canCompleteCircuit([8, 2, 3, 4], [2, 3, 4, 5]));