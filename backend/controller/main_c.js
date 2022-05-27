const CoursesSchema = require("../models/courses_model");
const UserSchema = require("../models/user_model");
const nodemailer = require("nodemailer");

exports.Enroll = async (req, res) => {
  try {
    const data = await UserSchema.create(req.body);

    data && res.status(201).json({ msg: "register successfully..." });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
exports.Login = async (req, res) => {
  try {
    const data = await UserSchema.findOne({ email: req.body.email });

    data && res.status(201).json({ msg: "login successfully..." });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.ForgetPassword = async (req, res) => {
  const token = Math.floor(Math.random() * 999999);
  try {
    const data = await UserSchema.findOne({ email: req.body.email });
    data.token = token;
    await data.save();
    console.log(data);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "************", // email of sender
        pass: "********", // password of sender
      },
    });
    const mailOptions = {
      from: "*********", // email of sender
      to: `${req.body.email}`,
      subject: "Course enrollment",
      text: `http://localhost:3000/reset_password?token=${token}&email=${req.body.email}`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(400).json(info.response);
      }
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
exports.VerifyToken = async (req, res) => {
  try {
    console.log(req.body.email);
    console.log(req.body.token);
    const data = await UserSchema.findOne({ email: req.body.email });
    console.log(data);
    if (data.token !== req.body.token) {
      console.log(data.token);
      return data && res.status(201).json({ msg: "token not match" });
    }
    data && res.status(201).json({ msg: "token match" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
exports.ResetPassword = async (req, res) => {
  try {
    const data = await UserSchema.findOne({ email: req.body.email });
    data.password = req.body.password;
    data.token = "token";
    await data.save();
    data && res.status(201).json({ msg: "password reset" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
