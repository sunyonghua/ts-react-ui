import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
class App extends Component {
  state = {
    val: '',
    array: []
  };

  getList = (num: number): number => {
    console.log(num);
    const a: number = 1;
    return a;
  };

  render() {
    return (
      <div className="App">
        <Button type="primary" className="button" size="small">
          确定
        </Button>
        <Button type="danger" className="button" size="large">
          确定
        </Button>
      </div>
    );
  }
}

export default App;
