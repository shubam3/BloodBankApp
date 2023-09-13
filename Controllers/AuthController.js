const UserModule = require("../modules/UserModule");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const registerController = async (req,res) => {
try {
    const existinguser = await UserModule.findOne({email:req.body.email})
    //validation
    if(existinguser){
        return res.status(200).send({
            success:false,
            message:'User Already exist'
        })
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password,salt);
    req.body.password = hashpassword;

    //rest data
    const user = new UserModule(req.body) ;
    await user.save();

    return res.status(201).send({
        success:true,
        message : 'user registered successfully',
        user,
    })

} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:'error in registerd API',error
    })
}
};

//login callback
const loginController = async (req,res) =>{
  try {
    const user = await UserModule.findOne({email:req.body.email})
    if(!user){
        return res.status(404).send({
            success:false,
            message:'Invalid creditionals'
        })
    }
    //Check role
    if(user.role !== req.body.role){
        return res.status(500).send({
            success:false,
            message:'Role does not matched'
        })
    }
    //compare password
    const comparepassword = await bcrypt.compare(req.body.password, user.password)
    if(!comparepassword){
        return res.status(500).send({
            success:false,
            message:'Invalid creditionals'
        })
    }
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    return res.status(200).send({
        success: true,
        message:'Login successfully',
        token,user
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in API',error
    })
  }
};

//get current user
const currentUserController = async (req,res) =>{
try {
    const user = await UserModule.findOne({_id:req.body.userId})
    return res.status(200).send({
        success: true,
        message:'User Fetched Successfully',
        user
    })

} catch (error) {
    console.log(error)
    return res.status(500).send({
        success: false,
        message:'unable to get current user',error
    })
}
};

module.exports = {registerController,loginController,currentUserController};