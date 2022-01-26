// 블로그에서 그대로 긁어옴

const express = require('express');
const router = express.Router();

// 메인 페이지
router.get('/', (req, res) => {
    res.render('home/home');
});

module.exports = router;