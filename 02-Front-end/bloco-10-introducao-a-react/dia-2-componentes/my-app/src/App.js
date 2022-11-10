import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeClicks: 0
    }
  }

  handleClick = () => {
    console.log(this);
    // console.log('Clicou no botão!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks: estadoAnterior.numeroDeClicks + 1
    }))

    console.log(this.state);
  }
  render() {
    return (
      <button className='contador' onClick={this.handleClick}>{this.state.numeroDeClicks}</button>
    )
  }
}

export default App
