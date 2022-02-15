import "./login.css"
const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Kattsocial</h3>
                <span className="loginDesc">
                    Connect with Friends and the World 
                    around You
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="Email" className="loginInput" />
                    <input placeholder="Password" type="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                         Create a New Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login