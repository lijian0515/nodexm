// 数据库管理
// 模型:操作数据库返回的数据的库的操作结果


// 导入mysql模块 
const db = require('../tools1/db_config');


const checkEmail = function(email,callback){
    const sql = 'SELECT * FROM `users` WHERE email=?';
    db.query(sql,email, (err, data) => {
        if (err) {
        // return callback(err,  unll);
        return callback(err, null);
        }
        callback(null,data);
    })
}
exports.checkEmail = checkEmail;