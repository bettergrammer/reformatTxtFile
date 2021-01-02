const React = require('react');
const ReactDOM = require('react-dom');
const Input = require('./components/input.jsx');
const Output = require('./components/output.jsx');
const $ = require('jquery');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null
    };
  }

  componentDidMount() {
  }

  render() {
    return (
    <div>
      <h1>Numbers:</h1>
      <Input />
      <Output />
    </div>
    );
  }
};

ReactDOM.render(< App />, document.getElementById('app'));