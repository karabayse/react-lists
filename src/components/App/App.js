import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produce: ['spinach', 'celery', 'carrots'],
    };
  }

  render() {
    return (
      <div className="App">
        { JSON.stringify(this.state) }
      </div>
    );
  }
}

export default App;
