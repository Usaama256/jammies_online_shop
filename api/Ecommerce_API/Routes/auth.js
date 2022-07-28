const router = require("express").Router();
const User = require("../Model/User");
const CryptoJS = require("crypto-js"); //After npm install crypto-js, for ecrypting password
const jwt = require("jsonwebtoken"); //after npm install jsonwebtoken, For monitoring login

//Register
router.post("/register", async (req, res) => {
  if (
    req.body.username === null ||
    req.body.email === null ||
    req.body.password === null
  ) {
    res.status(500).json("Please Enter your Username, Email and Password");
  } else {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      //password: req.body.password,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });

    try {
      const savedUser = await newUser.save();

      const { password, ...rest } = savedUser._doc; //filtering out password from response

      res.status(201).json(rest);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    var passBool = false,
      userBool = false;

    const user = await User.findOne({ username: req.body.username }); //Searching for the entered user from DB

    !user
      ? res.status(401).json("Login Failed: Wrong Credentials!")
      : (userBool = true); //if user ain't there

    //Decryptying user password to compare it with the entered one
    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const Pass = hashedPass.toString(CryptoJS.enc.Utf8); //Converting hashed password to Utf8 string

    Pass !== req.body.password
      ? res.status(401).json("Login Failed: Wrong Credentials!")
      : (passBool = true);

    //JWT Token init
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...rest } = user._doc; //filtering out password from response

    userBool && passBool
      ? res.status(201).json({ ...rest, accessToken })
      : res.status(500).json("Login Failed");
  } catch (error) {
    //res.status(500).json(error);
  }
});

module.exports = router;
