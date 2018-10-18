// topic控制器
// 引入m_topic.js
const m_topic = require('../models/m_topic');
const moment = require('moment');
// 渲染主题页面列表页
// req请求
// res响应
exports.showtopic = (req, res) => {
    // res.re('signin.html');
    // 在渲染主题页前  获取数据
    m_topic.findAllTopics((err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务错误',
            })
        }
        // console.log(data[0]);

        res.render('index.html', {
            topicData: data,
            user: req.session.user
        });

    })
}


//渲染发布主体页
exports.showCreate = (req, res) => {
    res.render('topic/create.html');

}
//添加数据
exports.handlecreate = (req, res) => {
    // res.render('topic/create.html');
    const body = req.body
    // console.log(body);
    body.createdAt = moment().format();
    // 创建者id
    body.userId = req.session.user.id;
    // console.log(body.id);

    // 在添加评论是添加 事件
    m_topic.addTopic(body, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务错误'
            })


        }
        res.send({
            code: 200,
            message: '添加成功'
        })

    })

}

// 话题详情页
exports.TopicDetails = (req, res) => {

    // 获取动态的id

    const topicID = req.params.TopicDetails;
    // console.log(topicID);
    console.log(req.params);
    m_topic.findTopicById(topicID, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务错误'
            })
        }
        res.render('topic/show.html', {
            topicData: data[0]
        });
    })


}
//话题删除 
exports.DeleteTheTopic = (req, res) => {
    //    const tId = req.session.topics.id;

    const deleteTopicID = req.params.delete;



    m_topic.Deletethetopic(deleteTopicID, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务错误'
            })
        }
        // res.redirect('/signin')
        res.redirect('/')
    })
}
// 话题编辑页
exports.showedit = (req, res) => {
    const editid = req.params.edit;
    m_topic.xredit(editid, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务错误'
            })
        }
        res.render('topic/edit.html', {
            datas: data
        });

    })

}
// 话题编辑
exports.reviseContent = (req,res)=>{
    const body = req.body;
    console.log(body);
    m_topic.xgedit(body,(err,data)=>{
        if (err) {
            return res.send({
                code: 500,
                message: '服务错误'
            })
        } 
        res.send({
            code:200,
            message: '修改成功'
        })
    })
    
}