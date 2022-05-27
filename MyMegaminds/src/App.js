import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import ResetPassword from "./Components/ForgetPassword/ResetPassword";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Login from "./Components/Login/Login";

import Signup from "./Components/Signup/Signup";
import About from "./Components/Pages/About";
import Careers from "./Components/Pages/Careers";
import Blog from "./Components/Pages/Blog";
import Faq from "./Components/Pages/Faq.js";
import Faculty_login from "./Components/Faculty_Login/Faculty_login";
import Faculty_signup from "./Components/Faculty_Signup/Faculty_signup";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={
            <div>
              <Blog />
            </div>
          }
        />
        <Route
          path="/careers"
          element={
            <div>
              <Careers />
            </div>
          }
        />
        <Route
          path="/faq"
          element={
            <div>
              <Faq />
            </div>
          }
        />
        <Route exact path="/reset_password" element={<ResetPassword />}></Route>
        <Route
          exact
          path="/forgetpassword"
          element={<ForgetPassword />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/faculty_login" element={<Faculty_login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route
          exact
          path="/faculty_signup"
          element={<Faculty_signup />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
