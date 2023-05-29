const StatusCode = require("../Libs/StatusCode");

const RegisterCtrl = {}

RegisterCtrl.PostRegister = async (req, res) => {
    const DataUser = req.body;
    if (DataUser.User && DataUser.Password && DataUser.Email !== "") {
     
     
        res.send({message: StatusCode.Created})
    }else res.json({message: StatusCode.LengthRequired})
}




module.exports = RegisterCtrl;