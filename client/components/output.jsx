const React = require('react');
const $ = require('jquery');

class Output extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  handleClick() {
    let $dataDiv = $('.data-div')[0];
    let newFile = $dataDiv.textContent.split('(').join('\n(').trim();
    let fileData = {
      content: newFile
    }
    $.ajax({
      method: 'POST',
      url: '/reformattedFile',
      contentType: 'application/json',
      data: JSON.stringify(fileData),
      success: ((response) => {
        window.alert('saved reformatted file to directory!');
      }),
      error: ((err) => {
        console.warn('error: ', err);
      })
    });
  };

  render() {
    return (
      <div class="output">
        <h2>Download Formatted File:
          <button type="button" class="btn" onClick={this.handleClick.bind(this)}>Download File</button>
        </h2>
      </div>
    );
  }
}

module.exports = Output;