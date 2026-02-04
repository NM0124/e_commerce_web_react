const Login = () => {
  return (
    <div className="page loginPage">
      <div className="loginCard">
        <h2 className="loginTitle">EduShop Login</h2>

        <div className="loginField">
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>

        <div className="loginField">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <button className="loginBtn">Login</button>
      </div>
    </div>
  );
};

export default Login;
