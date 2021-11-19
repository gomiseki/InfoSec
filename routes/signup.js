var express = require('express');
var router = express.Router();
var sha256 = require('sha256');
const getConnection = require('../db/connection');


/* GET signup listing. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: '회원가입' ,err:false});
});

router.post('/', function(req, res, next) {
  let data = {
    id: req.body.id,
    nickname: req.body.nickname,
    password: sha256(req.body.password)
  }
  if(data.id==''||data.nickname==''||data.password==''){
    res.render('signup',{ title: '회원가입', err:'모든 항목을 입력해주세요' })
    return
  }
  getConnection(async(conn)=>{
    try {
      console.log(data)
      const result = await conn.query('INSERT INTO user SET ?', data)
      res.redirect('/?user='+req.body.nickname);
    } 
    catch (error) {
      res.render('signup',{ title: '회원가입', err:error })
    }
    })
  });

module.exports = router;
/*
getConnection(async(conn)=>{
  try{
    const [err, results] = await conn.query('INSERT INTO `user` SET', req.body);
    res.redirect('/index');
  }
  
  catch (err){
    res.json({ error: error });
  }
}) */

