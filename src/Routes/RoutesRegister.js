const { Router } = require('express');
const router = Router();

const { PostRegister } = require('../Controller/ControllerRegister');

router.route('/')
    .post(PostRegister)

module.exports = router;