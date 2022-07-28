const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payments", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenI,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeError, stripeSuccess) => {
      stripeError
        ? res.status(500).json(stripeError)
        : res.status(200).json(stripeSuccess);
    }
  );
});

module.exports = router;
