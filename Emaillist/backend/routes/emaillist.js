const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').options((req,res , next)=>{
    console.log('options request');

    res
        .set('Access-Control-Allow-Origin', req.headers.origin)
        .set('Access-Control-Allow-Headers', req.get('Access-Control-Request-Headers'))// 메소드에 대한 요청을 sharing 해줄지 말지의 설정 req.get('Access-Control-Allow-Method') --> 요청에 대한 동적인 처리
        .set('Access-Control-Allow-Methods', req.get('Access-Control-Request-Methods'))
        .set('Access-Control-Allow-Credential', true)  // api에서 쿠키를 구울수 있게 해주는것
        .send();

});
router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;