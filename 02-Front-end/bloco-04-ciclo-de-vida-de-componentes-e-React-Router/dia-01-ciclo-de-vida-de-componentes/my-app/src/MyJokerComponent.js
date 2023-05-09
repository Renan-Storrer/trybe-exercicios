import React from "react";
import DadJoke from "./DadJoke";

class MyJokerComponent extends React.Component {
  constructor() {
    super()
    // console.log('constructor');

    this.state = {
      piada: 'Minha piada'
    };
  }

  render() {
    return (

      <DadJoke></DadJoke>
    )
  }
}

export default MyJokerComponent;