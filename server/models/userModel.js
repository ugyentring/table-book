const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
    },

    email: {
      type: String,
      trim: true,
      required: "Email is required",
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      min: 6,
      max: 64,
    },
    stripe_account_id: {},
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
);

//hash password logic
userSchema.pre("save", function (next) {
  let user = this;

  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log("Error in hashing password", err);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

//compare password when loggin in
userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log("Compare password", err);
      return next(err, false);
    }
    console.log("match password", match);
    return next(null, match);
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
