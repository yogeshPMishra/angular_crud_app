const express = require('express');
const router = express.Router();
const { register, getsdata, getdata, update, deletedata } = require('../controller/userController');

router.route('/create').post(register);
router.route('/read').get(getsdata);
router.route('/read/:id').get(getdata);
router.route('/update/:id').put(update);
router.route('/delete/:id').delete(deletedata);
module.exports = router;