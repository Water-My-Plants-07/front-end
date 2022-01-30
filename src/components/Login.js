import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">
          Username
          <input type="text" name="username" id="username" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" name="password" id="password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
