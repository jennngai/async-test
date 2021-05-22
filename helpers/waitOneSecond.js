const waitOneSecond = (callback) => {
  setTimeout(() => {
    callback(null, 'waited one second');
  }, 1000)
}

// waitOneSecond invokes a callback after 1 second

// input: callback
// output: none

module.exports = waitOneSecond;