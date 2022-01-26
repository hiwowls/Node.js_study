//세팅
const express = require('express');
const connect = require('./schemas');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const ejs = require('ejs');
const app = express();
const port = 3000;

// mongoDB 연결
connect();

// ejs 적용
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

// body-parser 적용(DB로 데이터 보내기)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// method-override 적용(수정 및 삭제 용이하도록)
app.use(methodOverride('_method'));

//라우트 적용
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));

// 포트 연결시 로그 띄움
app.listen(port, () => {
    console.log(port, '포트 연결');
});