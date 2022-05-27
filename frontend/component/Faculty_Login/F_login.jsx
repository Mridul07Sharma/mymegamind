import React, { useEffect, useState } from "react";
import "./Login.css";
import { isEmail, isStrongPassword, isLength } from "validator";
import { Link } from "react-router-dom";
import config from "../../reqConfig";
import universalLink from "../../universalLink";
import axios from "axios";

function F_login() {
  const [type, setType] = useState("password");
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState([
    "",
    "/transparent.png",
    false,
    "Email",
    "",
  ]);

  const [password, setPassword] = useState([
    "",
    "/transparent.png",
    false,
    "Password",
    "",
  ]);

  useEffect(() => {
    setDisable(email[2] && password[2] ? false : true);
  }, [email, password]);

  const handleregister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${universalLink}/login`,
        {
          email: email[0],
          password: password[0],
        },
        config
      );

      data && window.location.replace("/faculty_dashboard");
    } catch (error) {
      console.log(error.message);
    }
    setDisable(loading);
  };

  return (
    <>
      <div className="SignContainer">
        <div className="SignInnerContainer">
          <div className="rightDiv">
            <form className="form">
              <div className="logo">
                <img
                  src="https://www.mymegaminds.com/assets/images/logo.png"
                  alt=""
                />
              </div>
              <p>Faculty login</p>

              <div className="form-group">
                <div className="user-input-wrp">
                  <input
                    type="text"
                    className="inputText"
                    onChange={(e) =>
                      isEmail(e.target.value)
                        ? setEmail([
                            e.target.value,
                            "/check.png",
                            true,
                            "Email",
                            "green",
                          ])
                        : setEmail([
                            e.target.value,
                            "/cross.png",
                            false,
                            "Invalid Email",
                            "red",
                          ])
                    }
                    required
                  />
                  <span style={{ color: email[4] }} className="floating-label">
                    {email[3]}
                  </span>
                </div>
                <div className="validation">
                  <img src={email[1]} alt="" />
                </div>
              </div>

              <div className="form-group">
                <div className="user-input-wrp">
                  <input
                    type={type}
                    className="inputText"
                    onChange={(e) =>
                      isStrongPassword(e.target.value)
                        ? setPassword([
                            e.target.value,
                            "/check.png",
                            true,
                            "Password",
                            "green",
                          ])
                        : setPassword([
                            e.target.value,
                            "/cross.png",
                            false,
                            "Weak Password",
                            "red",
                          ])
                    }
                    required
                  />
                  <span
                    style={{ color: password[4] }}
                    className="floating-label"
                  >
                    {password[3]}
                  </span>
                </div>
                <div className="validation">
                  <img src={password[1]} alt="" />
                </div>
                <span
                  className="show_and_hide"
                  onClick={() =>
                    setType(type === "password" ? "text" : "password")
                  }
                >
                  {type === "password" ? "Show" : "Hide"}
                </span>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value={loading ? "" : "Log in"}
                  className={loading ? "loading" : undefined}
                  disabled={disable}
                  onClick={handleregister}
                />
              </div>

              <div className="ForgotPassword">
                <p>
                  By signing up, you agree to our Terms , Data Policy and
                  Cookies Policy
                </p>
              </div>
            </form>
            <div className="signUpBox">
              <p>
                Have an account? <Link to="/f_signup">Sign up</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default F_login;
