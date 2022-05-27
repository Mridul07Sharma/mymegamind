import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import config from "../../reqConfig";
import universalLink from "../../universalLink";

const ResetPassword = () => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setToken(searchParams.get("token"));
    setEmail(searchParams.get("email"));
    const verify = async () => {
      try {
        const { data } = await axios.post(
          `${universalLink}/verifytoken`,
          {
            email,
            token,
          },
          config
        );
        console.log(data);
        data && setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    verify();
  }, [email]);
  const handleSubmit = async () => {
    if (password !== cpassword) {
      return alert("password not match");
    }
    try {
      const { data } = await axios.put(
        `${universalLink}/resetpassword`,
        {
          email,
          password,
        },
        config
      );
      data && alert("password reset");
      window.location.replace("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {data && data.msg === "token match" ? (
        <div className="container">
          <input
            style={{ padding: "10px 15px", marginRight: "20px" }}
            type="text"
            placeholder="new password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            style={{ padding: "10px 15px", marginRight: "20px" }}
            type="text"
            placeholder="confirm password"
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
      ) : (
        <div>
          <img src="/loader.gif" alt="" />
          {data.msg === "token not match" && (
            <p style={{ color: "red" }}>Link is expired</p>
          )}
        </div>
      )}
    </>
  );
};

export default ResetPassword;
