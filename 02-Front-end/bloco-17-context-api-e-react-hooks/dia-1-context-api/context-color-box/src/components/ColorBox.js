// ./components/ColorBox.js
import React from 'react';
import '../styles/box.css';
class ColorBox extends React.Component {
  render() {
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: 'blue' } }
      >
        Click me to change my color!
      </button>
    )
  }
}
export default ColorBox;