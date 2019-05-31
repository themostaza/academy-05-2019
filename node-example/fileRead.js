const { measureSpeed } = require("./utils");

//////// Promise

// measureSpeed("./file.md")
//   .then(([val, date]) => {
//     console.log(val, date);
//     return measureSpeed("./file1.md");
//   })
//   .then(([val, date]) => {
//     console.log(val, date);
//   });

// (async () => {
//   let [val, date] = await measureSpeed("./file.md");
//   console.log(val, date);
//   [val, date] = await measureSpeed("./file.md");
//   console.log(val, date);
// })();

//////// Promise.all then

// const promises = [];

// promises.push(
//   measureSpeed("./file.md")
//     .then(([val, date]) => {
//       throw new Error("AIA");
//       val = `${val} - thenned`;
//       console.log(val, date);
//       return val;
//     })
//     .catch(err => console.log(err))
// );
// promises.push(measureSpeed("./file1.md"));

// Promise.all(promises).then(([val1, val2]) => {
//   console.log(val1, val2);
// });

//////// Promise.all async await

(async () => {
  const promises = [];

  promises.push(
    measureSpeed("./file.md")
      .then(([val, date]) => {
        val = `${val} - thenned`;
        return val;
      })
      .catch(err => console.log(err))
  );
  promises.push(measureSpeed("./file1.md"));

  const [val1, val2] = await Promise.all(promises);
  console.log(val1, val2);
})();
