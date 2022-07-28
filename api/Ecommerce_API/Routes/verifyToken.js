const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token; //header with key "token" => Authheader
  if (authHeader) {
    const token = authHeader.split(" ")[1]; //spliting auth header and taking the token at index 1

    //Verifying token
    jwt.verify(token, process.env.JWT_KEY, (error, user) => {
      error && res.status(403).json("Invalid Token!");

      req.user = user;

      next(); //Continue with current function
    });
  } else {
    res.status(401).json("Access Denied");
  }
};

//token to authorize updating
const tokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Permission Denied!");
    }
  });
};

//Checking for admin or not
const tokenIsAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Permission Denied!");
    }
  });
};

module.exports = { verifyToken, tokenAuthorization, tokenIsAdmin };
