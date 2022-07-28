const Order = require("../Model/Order");
const { tokenIsAdmin, tokenAuthorization } = require("./verifyToken");
const router = require("express").Router();

//Create Order
router.post("/", tokenAuthorization, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update
router.put("/update/:id", tokenIsAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete Order
router.delete("/delete/:id", tokenIsAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json("Order Deleted Successfully");
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get User Order
router.get("/find/:userId", tokenAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userID: req.params.userId });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get All Users Orders
router.get("/findall", tokenIsAdmin, async (req, res) => {
  try {
    const userOrders = await Order.find();
    res.status(200).json(userOrders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Income Stats per month
router.get("/incomeStats", tokenIsAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
