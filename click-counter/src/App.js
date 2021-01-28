import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

// function App() {
//   render() {
//     return (
//       <div>This div has been clicked {this.props.clicks} times</div>
//     );
//   } 
// }

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        This div has been clicked {this.props.clicks} times.
      </div>
    );
  }
}


export default App;
