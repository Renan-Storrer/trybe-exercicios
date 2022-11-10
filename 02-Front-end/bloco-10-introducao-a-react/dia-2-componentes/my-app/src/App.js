import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeClicks: 0,
      backgroundColor: 'red'
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

  selectColor = () => {
    this.setState((estadoAnterior, _props) => ({
      backgroundColor: 'blue'

    }))
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <button
          className='contador'
          onClick={this.handleClick}>
          {this.state.numeroDeClicks}
        </button>
        <button onClick={this.selectColor}>Trocar Cor</button>
      </div>
    )
  }
}

export default App
