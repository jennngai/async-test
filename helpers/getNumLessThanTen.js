

const generateNumLessThan = (maxNum) => {
  return Math.random() * maxNum;
};


//Function that uses callback pattern
const getNumLessThanTen = (callback) => {
  setTimeout(() => {
    const randNum = generateNumLessThan(10);
    callback(null, randNum);
    // passes the generated number to the callback
    // INVOKES the callback, does NOT return a callback
  }, 0);
};

// input: callback
// output: callback with null and randNum
module.exports = getNumLessThanTen;

