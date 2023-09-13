const UserModule = require("../modules/UserModule");

module.exports = async (req, res, next) => {
  try {
    const user = await UserModule.findById(req.body.userId);
    //check admin
    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Auth failed",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Auth failed, Admin Api",
      error,
    });
  }
};
