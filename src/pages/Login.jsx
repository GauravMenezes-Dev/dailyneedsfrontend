import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../components/FormInput";
import { userLoginStartAsync } from "../redux/users/actions";

const Login = ({ loginToApp }) => {
  const [userCreds, setCreds] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userCreds;

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginToApp(username, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCreds({
      ...userCreds,
      [name]: value,
    });
  };

  return (
    <div className="container is-fluid column is-6">
      <div className="container box">
        <h1 className="is-size-3 block">Welcome to the Nunu App!</h1>
        <form className="block" onSubmit={handleSubmit}>
          <FormInput
            handleChange={handleChange}
            name="username"
            type="text"
            labelText="Username"
            value={username}
            placeholder="Enter Username."
          />
          <FormInput
            handleChange={handleChange}
            name="password"
            type="password"
            labelText="Password"
            value={password}
            placeholder="Enter Password."
          />
          <div className="field">
            <div className="control">
              <input
                type="submit"
                value="Submit"
                className="button is-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mdtp = (dispatch) => ({
  loginToApp: (username, password) =>
    dispatch(userLoginStartAsync({ username, password })),
});

export default connect(null, mdtp)(Login);
