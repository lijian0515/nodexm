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
    .get('/topic/create', c_topic.showCreate)
    .post('/create', c_topic.handlecreate)
    // 话题详情页
    // TopicDetails
    // 动态获取id
    .get('/topic/:TopicDetails', c_topic.TopicDetails)
    .get('/signout', c_user.aaa)
    // 删除信息
    .get('/topic/detail/:delete', c_topic.DeleteTheTopic)
    // 渲染话题编辑/topic/detail/edit
    .get('/topic/detail/edit/:edit', c_topic.showedit)
    // 修改内容
    .post('/topic/reviseEdit',c_topic.reviseContent)



// module.exprots=router;
module.exports = router;