const React = require('react');
const $ = require('jquery');
const fs = require('fs');

const Output = () => {

  const handleClick = () => {
    let $dataDiv = $('.data-div')[0];
    let newFile = $dataDiv.textContent.split('(').join('\n(').trim();
    fs.writeFile('numbersFormatted.txt', newFile, (err, data) => {
      if (err) console.error('error: ', err);
      console.log('succesfully wrote file:', data)
    });
  }

  return (
    <div class="output">
      <h2>Download Formatted File:
        <button type="button" class="btn" onClick={handleClick}>Download File</button>
      </h2>
    </div>
  );
};

module.exports = Output;