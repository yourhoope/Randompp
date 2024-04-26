let mypps = [];

Array.prototype.MyRandomPP = function () {
  if (this.length === 0) {
    return null;
  }
  const randomPP = Math.floor(Math.random() * this.length);
  return this[randomPP];
};

mypps.push("B=D", "B==D", "B===D", "B====D", "B=====D", "B======D", "B=======D");
console.log(mypps);
console.log(mypps.MyRandomPP());
