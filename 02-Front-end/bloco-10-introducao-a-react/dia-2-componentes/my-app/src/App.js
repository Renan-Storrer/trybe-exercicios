import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    // console.log(this);
    console.log('Clicou no botão!')
  }
  render() {
    return (
      <button onClick={this.handleClick}>Meu Botão</button>
    )
  }
}

export default App
