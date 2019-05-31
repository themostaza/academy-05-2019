// Callback

// console.log("startCallback");
// const timeoutCallback = (iter, callback) => {
//   for (let i = 0; i < iter; i++) {
//     if (Math.random() < 0.01) callback("ERRORE");
//   }
//   callback(undefined);
// };

// timeoutCallback(99999, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("middleCallback1");
//   timeoutCallback(1, (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("middleCallback2");
//     timeoutCallback(1, (err, res) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log("middleCallback3");
//       timeoutCallback(1, (err, res) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("endCallback");
//       });
//     });
//   });
// });

// Promise

// console.log("startPromise");
// const timeoutPromise = iter => {
//   return new Promise((res, rej) => {
//     for (let i = 0; i < iter; i++) {
//       if (Math.random() < 0.001) rej("ERRORE");
//     }
//     res();
//   });
// };

// timeoutPromise(1)
//   .then(() => {
//     console.log("middle1");
//     return timeoutPromise(1);
//   })
//   .then(() => {
//     console.log("middle2");
//     return timeoutPromise(1);
//   })
//   .catch(err => console.log(err));
//   .then(() => {
//     console.log("endPromise");
//   })

// async - await

console.log("startAsync");
const timeoutPromise = iter => {
  return new Promise((res, rej) => {
    for (let i = 0; i < iter; i++) {
      if (Math.random() > 0.001) rej("ERRORE");
    }
    res();
  });
};

const asyncer = async () => {
  try {
    await timeoutPromise(1);
    console.log("middle1");
    await timeoutPromise(1);
    console.log("middle2");
    await timeoutPromise(1);
    console.log("endAsync");
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  await asyncer();
})();
