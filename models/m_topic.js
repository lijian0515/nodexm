const db = require('../nodexm/tools1/db_config');

// 获取主体列表数据
exports.findAllTopics = function (callback) {
    const sql = 'SELECT * FROM `topics` ORDER BY createdAt DESC';
    db.query(sql, (err, data) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, data)
    });
}
// 添加数据
exports.addTopic = function (body, callback) {
    // const sql = 'INSERT INTO `posts` SET ?';
    const sql = 'INSERT INTO `topics` SET ?';
    db.query(sql, body, (err, data) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, data);
    })
}
//查找动态ID 
exports.findTopicById = function (topicID, callback) {
    // const sql = 'SELECT * FROM `posts` WHERE name=? OR content=?';
    const sql = 'SELECT *FROM `topics` WHERE id=?';
    db.query(sql, topicID, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);

    })
}
// 删除信息
exports.Deletethetopic = function (id, callback) {
    // const sql = 'DELETE FROM `posts` WHERE name=?';    
    const sql = 'DELETE FROM `topics` WHERE id=?';
    db.query(sql, id, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    })
}
// 编辑页渲染
exports.xredit = function (id,callback) {
    const sql = 'SELECT * FROM `topics` WHERE id=?';
    // const sql = 'SELECT * FROM `topics` WHERE id=?';
    db.query(sql, id,(err, data) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, data)
    });
}
exports.xgedit = function(data,callback){
// const sql = 'UPDATE `posts` SET content=? WHERE name=? ';
    
    const sql='UPDATE `topics` SET ? WHERE id=?'
    db.query(sql,[data,data.id],(err,data)=>{
        if(err){
            return callback(err)
        }
        callback(null,data)
    })    
}