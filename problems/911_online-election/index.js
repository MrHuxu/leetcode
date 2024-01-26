/**
 * @param {number[]} persons
 * @param {number[]} times
 */
let TopVotedCandidate = function(persons, times) {
  this.data = [];

  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    const time = times[i];

    if (times[i - 1] === undefined) {
      this.data[time] = {
        leader : person,
        votes  : { [person]: 1 }
      };
    } else {
      const oldTime = times[i - 1];
      if (this.data[oldTime].votes[person] === undefined) {
        this.data[oldTime].votes[person] = 1;
      } else {
        this.data[oldTime].votes[person]++;
      }
      this.data[time] = {
        leader : this.data[oldTime].votes[person] >= this.data[oldTime].votes[this.data[oldTime].leader] ? person : this.data[oldTime].leader,
        votes  : this.data[oldTime].votes,
      };
    }
  }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  for (; t >= 0; t--) {
    if (this.data[t]) return this.data[t].leader;
  }
};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = Object.create(TopVotedCandidate).createNew(persons, times)
 * var param_1 = obj.q(t)
 */

const obj = new TopVotedCandidate([0,1,1,0,0,1,0],[0,5,10,15,20,25,30]);
console.log(obj.q(3));
console.log(obj.q(12));
console.log(obj.q(25));
console.log(obj.q(15));
console.log(obj.q(24));
console.log(obj.q(8));