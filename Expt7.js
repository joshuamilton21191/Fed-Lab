import React, { Component } from 'react';

export default class Expt7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black', 
    };
  }

  
  changeColor = (newColor) => {
    this.setState({ color: newColor });
  };

  render() {
    const { color } = this.state;

    return (
      <div>
        <h1 style={{ color }}>Text Color Changer</h1>
        <button onClick={() => this.changeColor('red')}>Red</button>
        <button onClick={() => this.changeColor('blue')}>Blue</button>
        <button onClick={() => this.changeColor('green')}>Green</button>
      </div>
    );
  }
}

 
 