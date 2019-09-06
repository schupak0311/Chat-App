import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { auth } from "../../routines/routines";

import "./loginPage.css";

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   input: {
//     display: "none"
//   }
// }));

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    const propName = e.target.name;

    this.setState({
      [propName]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.auth({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    const {
      loginData: { data, loading }
    } = this.props;

    return (
      <>
        {data &&
          (data.isAdmin ? <Redirect to="/users" /> : <Redirect to="/chat" />)}
        <div className="login">
          <h3 className="login__title">Login Page</h3>
          <form className="login__form" onSubmit={this.onSubmit}>
            <Input
              placeholder="username"
              name="username"
              onChange={this.onChange}
            />
            <Input
              placeholder="password"
              name="password"
              onChange={this.onChange}
            />

            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.loginData
});

const mapDispatchToProps = {
  auth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
