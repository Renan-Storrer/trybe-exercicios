import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatchLogin, history } = this.props;

    dispatchLogin({ email, password });
    history.push('/costumers');
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="email"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            placeholder="senha"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
          <button type="submit">
            Entre
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (userData) => dispatch(login(userData))
});

export default connect(null, mapDispatchToProps)(Login);
