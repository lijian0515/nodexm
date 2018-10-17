// 项目的接口文档
// 1.导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
// 引入session
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'nodexm52'
};
var sessionStore = new MySQLStore(options);
// 2. 使用express 实例化 app对象
const app = express();


// 统一静态资源
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))
// 静态模板
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
// 配置 express-mysql-session
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));
// 3.路由分发
app.use(router);





// 4.绑定接口
app.listen(12345,()=>{
    console.log('success---');
    
})

