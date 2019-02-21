import React, { Component } from 'react';
import Button from './components/button/button';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button className={"button"} size="small" circle >
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
