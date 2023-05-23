const { Router } = require('express');
const router = Router();

const { LoginSesion } = require("../Controller/ControllerLogin");

router.route('/')
    .post(LoginSesion)

module.exports = router;