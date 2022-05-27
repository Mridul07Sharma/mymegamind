const {
  Enroll,

  Login,
  ForgetPassword,
  VerifyToken,
  ResetPassword,
} = require("../controller/main_c");

const Router = require("express").Router();

Router.route("/enroll").post(Enroll);
Router.route("/login").post(Login);
Router.route("/forgetpassword").put(ForgetPassword);
Router.route("/verifytoken").post(VerifyToken);
Router.route("/resetpassword").put(ResetPassword);

module.exports = Router;
