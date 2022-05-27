import React, { useEffect, useState } from "react";
import "./Signup.css";
import { isEmail, isStrongPassword, isLength } from "validator";
import { Link } from "react-router-dom";
import config from "../../reqConfig";
import universalLink from "../../universalLink";
import axios from "axios";

function Faculty_signup() {
  const [type, setType] = useState("password");
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState([null, false]);
  const [email, setEmail] = useState([
    "",
    "/transparent.png",
    false,
    "Email",
    "",
  ]);
  const [fullname, setFullname] = useState([
    "",
    "/transparent.png",
    false,
    "Fullname",
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
    setDisable(
      email[2] && select[1] && fullname[2] && password[2] ? false : true
    );
  }, [email, fullname, select, password]);

  const handleregister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${universalLink}/enroll`,
        {
          name: fullname[0],
          memberType: select[0],

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
              <p>Faculty signup</p>

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
                    type="text"
                    className="inputText"
                    onChange={(e) =>
                      isLength(e.target.value, { min: 4, max: 20 })
                        ? setFullname([
                            e.target.value,
                            "/check.png",
                            true,
                            "Fullname",
                            "green",
                          ])
                        : setFullname([
                            e.target.value,
                            "/cross.png",
                            false,
                            "Fullname Allow",
                            "red",
                          ])
                    }
                    required
                  />
                  <span
                    style={{ color: fullname[4] }}
                    className="floating-label"
                  >
                    {fullname[3]}
                  </span>
                </div>
                <div className="validation">
                  <img src={fullname[1]} alt="" />
                </div>
              </div>
              <div className="form-group">
                <div className="user-input-wrp">
                  <select
                    style={{ height: "100%" }}
                    type="text"
                    className="inputText"
                    onChange={(e) => setSelect([e.target.value, true])}
                    required
                  >
                    <option value={null}>select option</option>
                    <option value="Faculty">faculty</option>
                    <option value="Student">Student</option>
                  </select>
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
                  value={loading ? "" : "Sign up"}
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
                Have an account? <Link to="/f_login">Log In</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faculty_signup;
