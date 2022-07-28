const Product = require("../Model/Product");
const { tokenIsAdmin } = require("./verifyToken");
const router = require("express").Router();

//Create Product
router.post("/", tokenIsAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update
router.put("/update/:id", tokenIsAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete product
router.delete("/delete/:id", tokenIsAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json("Product Deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500), json(error);
  }
});

//Get All products
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    var products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(100); //http://localhost:4102/api/products?new=true
    } else if (qCategory) {
      products = await Product.find({ category: { $in: [qCategory] } }); //http://localhost:4103/api/products?category=Man
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;