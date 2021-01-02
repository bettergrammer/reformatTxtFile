const React = require('react');
const $ = require('jquery');

class Input extends React.Component {

  constructor() {
    super();

    this.state = {
      currentFile: []
    };
  }

  handleRead() {
    $.ajax({
      url: '/reformatFile',
      success: ((response) => {
        currentFile = response;
        console.log('state', currentFile);
        let $dataDiv = $('.data-div');
        response = response.split('\n');
        console.log('response ', response);
        this.setState({
          currentFile: response
        })
      }),
      error: (err) => {
        console.error('error: ', err);
      }
    });
  };

  render() {
    return (
      <div class="input">
        <h2>Reformat File:</h2>
        <button class="btn" onClick={this.handleRead.bind(this)}>Reformat File</button>
        <div class="data-div">
          <ul>
            {this.state.currentFile.map((number) => {
              return <li>{number}</li>
            })}
          </ul>
        </div>
      </div>
    );
  };
}

module.exports = Input;