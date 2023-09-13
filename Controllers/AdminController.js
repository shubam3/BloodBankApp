const UserModule = require("../modules/UserModule");

const getDonarListController = async (req, res) => {
  try {
    const donarData = await UserModule.find({ role: "donar" }).sort({
      createdAt: -1,
    });

    return res.status(200).send({
      success: true,
      Toatlcount: donarData.length,
      message: "Donar List Fetched Successfully",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In DOnar List API",
      error,
    });
  }
};

const getHospitalListController = async (req, res) => {
  try {
    const donarData = await UserModule.find({ role: "hospital" }).sort({
      createdAt: -1,
    });

    return res.status(200).send({
      success: true,
      Toatlcount: donarData.length,
      message: "Hospital List Fetched Successfully",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List API",
      error,
    });
  }
};

const getorganizationlListController = async (req, res) => {
  try {
    const donarData = await UserModule.find({ role: "organization" }).sort({
      createdAt: -1,
    });

    return res.status(200).send({
      success: true,
      Toatlcount: donarData.length,
      message: "Organization List Fetched Successfully",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Organization List API",
      error,
    });
  }
};
//
const deleteDonarContainer = async (req, res) => {
  try {
    await UserModule.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "donar record deletded successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete Api",
      error,
    });
  }
};

//export
module.exports = {
  getDonarListController,
  getHospitalListController,
  getorganizationlListController,
  deleteDonarContainer,
};
