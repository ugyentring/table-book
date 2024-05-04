const User = require("../models/userModel");

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

module.exports = { register };
