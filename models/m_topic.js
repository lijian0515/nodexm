const db = require('../nodexm/tools1/db_config');

// 获取主体列表数据
exports.findAllTopics =function(callback){
        const sql = 'SELECT * FROM `topics` ORDER BY createdAt DESC';
        db.query(sql,(err,data)=>{
            if (err) {
                return callback(err,null);
            }
            callback(null,data)
        });
}
// 添加数据
exports.addTopic = function (body,callback){
    // const sql = 'INSERT INTO `posts` SET ?';
    const sql = 'INSERT INTO `topics` SET ?';
    db.query(sql,body,(err,data)=>{
        if(err){
            return callback(err,null);
        }
            callback(null,data);
    })
}
//查找动态ID 
exports.findTopicById = function (topicID,callback){
    // const sql = 'SELECT * FROM `posts` WHERE name=? OR content=?';
    const sql = 'SELECT *FROM `topics` WHERE id=?';
    db.query(sql,topicID,(err,data)=>{
        if (err) {
            return callback(err);
        }
        callback(null,data);

    })
}
