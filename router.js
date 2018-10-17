// 路由管理
// 1.导包
// const express = require('express');
const express = require('express');
const c_user = require('./controllres/c_user');
const c_topic = require('./controllres/c_topic');
// const body = require('body-parser');
// const mysql = require('mysql');
// 

// 2.使用express 获取路由对象
const router = express.Router();
// 3.路由测试
router.get('/signin', c_user.showuser)
    .post('/signin', c_user.showsigin)
    // 话题页
    // .post('/signin', c_user.handleSignin)
    .get('/', c_topic.showtopic)
    // 添加主题
    .get('/topic/create',c_topic.showCreate)
    .post('/create',c_topic.handlecreate)
    // 话题编辑
    .get('/topic/edit',c_topic.showedit)

    // 话题详情页
    // TopicDetails
    .get('/topic/:TopicDetails',c_topic.TopicDetails)
    .get('/signout',c_user.aaa);




// module.exprots=router;
module.exports = router;