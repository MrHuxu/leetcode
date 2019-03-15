function Interval(start, end) {
  this.start = start;
  this.end = end;
}

module.exports = [{
  input : [[
    new Interval(0,2),
    new Interval(5,10),
    new Interval(13,23),
    new Interval(24,25)], [
    new Interval(1,5),
    new Interval(8,12),
    new Interval(15,24),
    new Interval(25,26)]],
  output : [
    new Interval(1,2),
    new Interval(5,5),
    new Interval(8,10),
    new Interval(15,23),
    new Interval(24,24),
    new Interval(25,25)
  ]
}, {
  input : [[
    new Interval(4,6),
    new Interval(7,8),
    new Interval(10,17)
  ],[
    new Interval(5,10)
  ]],
  output : [new Interval(5,6),new Interval(7,8),new Interval(10,10)]
}];