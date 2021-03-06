import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {connect} from 'react-redux'
import {authenticate} from '../actions/postAction'
import propTypes from 'prop-types'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  
  loginUser = () => {
    const creds= {
      username:this.state.username,
      password:this.state.password
  }
        this.props.authenticate(creds);
}

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={() => this.loginUser()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

Login.propTypes={
  authenticate:propTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticating: state.login.isAuthenticating,
    isLoggedIn: state.login.isLoggedIn,
    authenticationToken: state.login.authenticationToken,
    authError: state.login.authError
})

export default connect(mapStateToProps, {authenticate})(Login)