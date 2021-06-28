const express=require('express');
const { route } = require('../app');
const {AllUserData,AddUser,UserById,UserByIdAndUpdate}=require('../Controller/userController')
const {counter}=require('../Controller/counterMiddleware')


const router=express.Router();

router.get('/',AllUserData);
router.post('/add',counter,AddUser);
router.get('/user/:id',UserById);
router.put('/user/:id',counter,UserByIdAndUpdate)

module.exports=router;