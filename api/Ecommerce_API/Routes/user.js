const cryptoJs = require("crypto-js");
const User = require("../Model/User");
const { tokenAuthorization, tokenIsAdmin } = require("./verifyToken");
const router = require("express").Router();

//Update
router.put("/:id", tokenAuthorization, async (req, res) => {
  req.body.password
    ? (req.body.password = cryptoJs.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString())
    : "";

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete user
router.delete("/:id", tokenAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User Deleted Successfully");
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get user
router.get("/find/:id", tokenIsAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get All user
router.get("/findAll", tokenIsAdmin, async (req, res) => {
  try {
    const users = await User.find();

    const usersNoPassword = [];

    users.map((item) => {
      const { password, ...rest } = item._doc;
      usersNoPassword.push(rest);
    });

    res.status(200).json(usersNoPassword);
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get user Stats
router.get("/stats", tokenIsAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.getFullYear(date.setFullYear() - 1));
  try {
    //Returning users created from last year organised per month
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500), json(error);
  }
});
module.exports = router;
