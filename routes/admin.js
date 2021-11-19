var express = require('express');
var router = express.Router();
const getConnection = require('../db/connection');

/* GET signup listing. */
router.get('/', function(req, res, next) {

  let title = '로그인 성공... 토큰 같은게 있었다면 좋았겠지만 시간관계상 라우팅만으로 처리해버렸습니다. 죄송합니다.';
  let result;
  getConnection(async(conn)=>{
    try {
      result = await conn.query('select * from user')
      console.log(result[0])
      res.render('admin', { title: title, table:result[0] });
    } 
    catch (error) {
      console.log(error)
    }
  });
  console.log(result);
});

module.exports = router;
