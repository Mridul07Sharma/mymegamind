import axios from "axios";
import React, { useState } from "react";
import config from "../../reqConfig";
import universalLink from "../../universalLink";
import { isEmail } from "validator";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  // sloader
  const sendMail = async (email) => {
    try {
      const { data } = await axios.put(
        `${universalLink}/forgetpassword`,
        {
          email,
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleEmail = async () => {
    if (email === "" || !isEmail(email)) {
      return alert("Fill your email");
    }
    setLoader(true);
    await sendMail(email);
    setLoader(false);
    setEmail("");
    alert("check your Email: " + email);
  };
  return (
    <div>
      <p>
        we are sending an email on given email address, Please reset your
        password through their
      </p>
      <input
        style={{ padding: "10px 15px", marginRight: "10px" }}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      {!loader && (
        <button style={{ padding: "10px 15px" }} onClick={handleEmail}>
          Send
        </button>
      )}
    </div>
  );
};

export default ForgetPassword;
