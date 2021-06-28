const Counter=require('./../Model/counterModel');
const {Count}=require('./../Controller/counterMiddleware');
const express=require('express');

const router=express.Router();



router.get('/',Count)


module.exports=router;