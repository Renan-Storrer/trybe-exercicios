import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        Bem-vindo ao sistema de cadastramento!
        <Link to='/login' className="home-link">Faça seu login</Link>
      </div>
    );
  }
}

export default Home;
