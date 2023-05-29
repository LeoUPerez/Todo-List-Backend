const StatusCode = require("../Libs/StatusCode");

const LoginCtrl = {};

LoginCtrl.LoginSesion = async ( req, res ) => {
    const DataUser = req.body;
    if (DataUser.User && DataUser.Password !== "") {



        res.json({message: StatusCode.Ok})
    }else res.json({message: StatusCode.LengthRequired})

}

module.exports = LoginCtrl;