import React, { useState } from "react";

export default function () {
  const [isLogin, setIsLogin] = useState("");
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login-Form</h2>
              <input type="text" placeholder="Enter The Name" />
              <input type="password" placeholder="Enter The PassWord" />
              <a href="#">Forgot Password</a>
              <button>Login</button>
              <p>
                Not A Member?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  SignUp Now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SignUp-Form</h2>
              <input type="text" placeholder="Enter The Name" />
              <input type="password" placeholder="Confirm The PassWord" />
              <button>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
