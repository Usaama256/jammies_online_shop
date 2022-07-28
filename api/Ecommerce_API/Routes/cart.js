const Cart = require("../Model/Cart");
const { tokenIsAdmin, tokenAuthorization } = require("./verifyToken");
const router = require("express").Router();

//Create Cart
router.post("/", tokenAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update
router.put("/update/:id", tokenAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete Cart
router.delete("/delete/:id", tokenAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json("Cart Deleted Successfully");
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get User Cart
router.get("/find/:userId", tokenAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userID: req.params.userId });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get All Users Carts
router.get("/findall", tokenIsAdmin, async (req, res) => {
  try {
    const userCarts = await Cart.find();
    res.status(200).json(userCarts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
