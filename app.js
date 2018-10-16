// 项目的接口文档
// 1.导包
const express = require('express');
const router = require('./router');

const bodyParser = require('body-parser');
// 2. 使用express 实例化 app对象
const app = express();


// 统一静态资源
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))
// 静态模板
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));

// 3.路由分发
app.use(router);





// 4.绑定接口
app.listen(12345,()=>{
    console.log('success---');
    
})

