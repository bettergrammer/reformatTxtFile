const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const app = express();
const PORT = 3000;
const fs = require('fs');

app.use(express.static(Path.join(`${__dirname}/../public`)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/reformatFile', (req, res) => {
  fs.readFile(`${__dirname}/../numbers.txt`, 'utf-8', (err, data) => {
    if (err) console.warn('error: ', err);
    let dataArray = data.split('\n');
    dataArray = dataArray.map((number) => {
      if (number.slice(-1) === ',') {
        number = number.slice(0, -1);
      }
      return number;
    }).map((number) => {
      let numbers = '';
      for (let char of number) {
        if ((!isNaN(char)) && char !== ' ') {
          numbers += char;
        }
      }
      number = `(${numbers[0]}${numbers[1]}${numbers[2]})${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
      return number;
    });
    res.send(dataArray.join('\n'));
  })
});

app.post('/reformattedFile', (req, res) => {
  let newFile = req.body.content;
  fs.writeFile('numbersReformatted.txt', newFile, 'utf-8', ((err) => {
    if (err) {
      console.warn('error: ', err);
    }
    console.log('file saved');
  }));
  res.send(newFile);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
