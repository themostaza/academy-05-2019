const fs = require("fs");

const measureSpeed = path => {
  return new Promise((res, rej) => {
    //console.log(`Data inizio ${path}:`, new Date());

    fs.readFile(path, (err, data) => {
      if (err) rej("Errore in lettura file");
      res([`Data fine lettura ${path}:`, new Date()]);
    });

    //console.log(`Data fine ${path}:`, new Date());
  });
};

module.exports = {
  measureSpeed
};
