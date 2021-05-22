/*
Console Output when you run this file should be:
waited one second
waited one second
waited one second
I'm done
and randomNumber/numFile.txt should exist with a random number in it.
CONSTRAINTS
- You cannot use Math.random or the node fs module directly.
*/

// create a function
  // call waitOneSecond with callback
    // callback takes err (null) as first param and string as second param
    // callback console logs "waited one second"
  // call waitOneSecond
  // call waitOneSecond
  // call getNumLessThanTen which takes a callback as a param
    // invokes callback with err (first param) and a number (second param)
    // callback would be a function that saves the number as data
      // call writeToHardDRive with data and callback
      // writeToHardDrive takes data as first param and a callback

const waitOneSecond = require('./helpers/waitOneSecond.js');
const getNumLessThanTen = require('./helpers/getNumLessThanTen.js');
const writeToHardDrive = require('./helpers/writeToHardDrive.js');

const chainHelpers = function () {
  waitOneSecond((err, string) => {
    console.log(string);
    waitOneSecond((err, string) => {
      console.log(string);
      waitOneSecond((err, string) => {
        console.log(string);
        getNumLessThanTen((err, number) => {
          writeToHardDrive(number.toString(), (err, string) => {
            if (err) {
              console.log('Something went wrong!')
            } else {
              console.log(`I'm done`);
            }
          });
        })
      })
    })
  });
};

chainHelpers();












// function chainHelpers (callback) {
//   waitOneSecond((callback) => {
//     waitOneSecond((callback) => {
//       waitOneSecond((callback) => {
//           writeToHardDrive((getNumLessThanTen(null, callback)),
//             callback();
//         }
//       })
//     })
//   }
// }


  // pass getNumLessThanTen into the callback





