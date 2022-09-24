const { User } = require("../database/models/index");
module.exports = async (req, res, next) => {
  let User = null;

  if (req.session && req.session.User) {
    User = req.session.User;
  }

  res.locals.User = User;

  return next();
};
