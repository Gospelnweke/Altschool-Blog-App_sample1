const jwt = require("jsonwebtoken");

const authorizeUser = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.send("Unauthorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.send(" Unauthorized!");
    }

    const email = user.email;
    console.log(email);
    const userEmail = req.body.email;
    console.log(userEmail);
    if (!userEmail) {
      return res.send("Please enter your email");
    }
    if (!email || email !== userEmail) {
      return res.send("Unauthorized!");
    }

    req.user = user;
    req.email = user.email;
    next();
  });
};

//UPDATE BLOG MIDDLEWARE
const updateBlogCheck = (req, res, next) => {
  const { email, blogId, state } = req.body;

  if (!email || !blogId || !state) {
    return res.send("Please enter email, blogId and state!");
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.send("Unauthorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.send(" Unauthorized!");
    }

    const emailJwt = user.email;

    if (email !== emailJwt) {
      return res.send("Unauthorized!");
    }

    next();
  });
};
//UPDATE BLOG MIDDLEWARE
const getMyBlogsCheck = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.send("Please enter Your email!");
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.send("Unauthorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.send(" Unauthorized!");
    }

    const emailJwt = user.email;

    if (email !== emailJwt) {
      return res.send("Unauthorized!");
    }

    next();
  });
};
//UPDATE BLOG MIDDLEWARE
const updateBlogBodyCheck = (req, res, next) => {
  const { email, blogId, body } = req.body;

  if (!email || !blogId || !body) {
    return res.send("Please enter email, blogId and body!");
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.send("Unauthorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.send(" Unauthorized!");
    }

    const emailJwt = user.email;

    if (email !== emailJwt) {
      return res.send("Unauthorized!");
    }

    next();
  });
};
//UPDATE BLOG MIDDLEWARE
const deleteBlogCheck = (req, res, next) => {
  const { email, blogId } = req.body;

  if (!email || !blogId) {
    return res.send("Please enter email and blogId!");
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.send("Unauthorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.send(" Unauthorized!");
    }

    const emailJwt = user.email;

    if (email !== emailJwt) {
      return res.send("Unauthorized!");
    }

    next();
  });
};
//UPDATE BLOG MIDDLEWARE
const createBlogCheck = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.send("Please enter email");
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.send("Unauthorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.send(" Unauthorized!");
    }

    const emailJwt = user.email;

    if (email !== emailJwt) {
      return res.send("Unauthorized!");
    }

    next();
  });
};

module.exports = {
  authorizeUser,
  updateBlogCheck,
  updateBlogBodyCheck,
  deleteBlogCheck,
  createBlogCheck,
  getMyBlogsCheck,
};
