import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Kattsocial</h3>
          <span className="loginDesc">
            Connect with Friends and the World around You
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="Email" className="loginInput" />
            <input placeholder="Password" type="Email" className="loginInput" />
            <input
              placeholder="Password Again"
              type="Password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
