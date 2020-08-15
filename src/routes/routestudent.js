const express = require('express');
const user=require('../controller/student');

const router=express.Router();

router.get('/', user.getAll);
router.post('/', user.create);
router.get('/:id', user.getById);
router.put('/:id', user.updateById);
router.delete('/:id', user.deleteById);
module.exports = router;