import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Logout extends Component {
  logout=()=> {
    localStorage.removeItem('key');
  }

  render() {
    return (
      <div className="Login">
        <Button
            block
            bsSize="large"
            onClick={() => this.logout()}
            type="submit"
          >
          Logout
          </Button>
      </div>
    );
  }
}

export default Logout