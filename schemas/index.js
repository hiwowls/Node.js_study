// mongoDB 연결
const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/mypost', {
        
    })
    .catch(err => console.error(err));
};

module.exports = connect;