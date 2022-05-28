const {
  Register,

  Login,
  ForgetPassword,
  VerifyToken,
  ResetPassword,
  Faculty_Register,
  Faculty_Login,
} = require("../controller/main_c");

const Router = require("express").Router();

Router.route("/register").post(Register);
Router.route("/login").post(Login);

Router.route("/faculty_register").post(Faculty_Register);
Router.route("/faculty_login").post(Faculty_Login);

Router.route("/forgetpassword").put(ForgetPassword);
Router.route("/verifytoken").post(VerifyToken);
Router.route("/resetpassword").put(ResetPassword);

module.exports = Router;
