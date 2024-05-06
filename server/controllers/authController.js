const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//register user logic
const register = async (req, res) => {
  const { name, email, password } = req.body;

  //validations
  if (!name) return res.status(400).send("Name is required");

  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and the minlegth is 6 chars");

  let userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(400).send("Email already exist");

  const user = new User(req.body);

  try {
    await user.save();
    return res.json({ ok: true });
  } catch (error) {
    console.log("User creation failed", error);
    return res.status(400).send("Try again");
  }
};

//login user logic
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email }).exec();
    if (!user) res.status(400).send("User not found");

    //compare password
    user.comparePassword(password, (err, match) => {
      console.log("compare password error", err);
      if (!match || err) return res.status(400).send("Password doesn't match");

      //generate jwt token
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "10d",
      });
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (error) {
    console.log("Login error", err);
    res.status(400).send("Login failed");
  }
};

module.exports = { register, login };
