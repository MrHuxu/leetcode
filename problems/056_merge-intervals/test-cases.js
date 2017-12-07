function Interval(start, end) {
  this.start = start;
  this.end = end;
};

module.exports = [{
  input  : [[new Interval(1, 3), new Interval(2, 6), new Interval(8, 10), new Interval(15, 18)]],
  output : [new Interval(1, 6), new Interval(8, 10), new Interval(15, 18)]
}, {
  input  : [[new Interval(1,4),new Interval(0,2),new Interval(3,5)]],
  output : [new Interval(0, 5)]
}];