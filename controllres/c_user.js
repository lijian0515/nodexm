// 控制器的职责
// 实现cd函数
// 要的是数据库操作返回的结果
const express = require('express');
const m_user = require('../models/m_user')

exports.showuser = (req, res) => {
    // res.re('signin.html');
    res.render('signin.html');
}
// 话题页
// exports.showindex = (req, res) => {

//     res.render('index.html');
// }
exports.showsigin = (req, res) => {
    const body = req.body;
    // console.log(body.email);

    // const sql = 'SELECT * FROM `users` WHERE email=?'
    m_user.checkEmail(body.email, (err, data) => {
        if (err) {
            // throw err
            return err.send({
                code: 500,
                message: '服务器错误'
            })
        }
        if (!data[0]) {

            return res.send({
                code: 1,
                message: '邮箱错误'
            })

        }
        if (data[0].password != body.password) {
            return res.send({
                code: 2,
                message: '密码错误'
            })

        }
        res.send({
            code: 200,
            message: '登录成功'
        })


    })



}