const model = require('../models/emaillist');

module.exports = {
    readAll: async function(req, res, next) {
        try {
            const result = await model.findAll();
            res
                .set('Access-Control-Allow-Origin', req.headers.origin)      // 헤더 셋팅 : 요청에 대한 처리 --> 모든 origin의 요청을 다 받겠다는 설정
                .set('Access-Control-Allow-Credentials', true)                                            // 오션 처리는 라우터에서 기기
                .send({
                    result: 'success',
                    data: result,
                    message: null
                });
        } catch(err){
            next(err);
        }
    },
    create: async function(req, res, next) {
        try {
            const result = await model.insert(req.body);
            res.send({
                result: 'success',
                data: result,
                message: null
            });
        } catch(err){
            next(err);
        }
    }
}