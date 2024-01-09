const { expect } = require('chai');

/**
 * @param {number[][]} costs
 * @return {number}
 */
let twoCitySchedCost = function(costs) {
  costs.sort((c1, c2) => {
    const sub1 = Math.abs(c1[0] - c1[1]);
    const sub2 = Math.abs(c2[0] - c2[1]);
    return sub1 < sub2 ? -1 : 1;
  });

  const dis = { A: 0, B: 0 };
  let result = 0;
  for (let cost of costs) {
    if (cost[0] < cost[1]) {
      result += cost[0];
      dis['A']++;
    } else {
      result += cost[1];
      dis['B']++;
    }
  }

  if (dis['A'] === dis['B']) return result;
  else if (dis['A'] > dis['B']) {
    let tmp = (dis['A'] - dis['B']) / 2, i = 0;
    for (let cost of costs) {
      if (cost[0] < cost[1]) {
        i++;
        result = result + cost[1] - cost[0];
      }
      if (i === tmp) return result;
    }
  } else {
    let tmp = (dis['B'] - dis['A']) / 2, i = 0;
    for (let cost of costs) {
      if (cost[0] >= cost[1]) {
        i++;
        result = result - cost[1] + cost[0];
      }
      if (i === tmp) return result;
    }
  }
};

it('two-city-scheduling', () => {
  expect(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])).to.eq(110);
  expect(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]])).to.eq(1859);
  expect(twoCitySchedCost([[518,518],[71,971],[121,862],[967,607],[138,754],[513,337],[499,873],[337,387],[647,917],[76,417]])).to.eq(3671);
  expect(twoCitySchedCost([[841,185],[295,946],[928,450],[55,806],[714,89],[787,380],[663,323],[814,265],[581,581],[850,486],[390,491],[560,678],[311,283],[145,772],[987,471],[465,611],[926,367],[782,532],[299,317],[605,260],[751,735],[614,746],[747,904],[267,653]])).to.eq(9260);
});