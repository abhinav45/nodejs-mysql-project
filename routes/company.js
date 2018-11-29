var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/applicants',function(req,res){
	db.query('select * from applied where cid=?',[req.user['main_id']],function(err,results){
		if(err) throw err;
		res.render('company/applicants',{data:results});
	});
});

router.post('/applicants',function(req,res){
	sid = req.body.sid;
	name = req.body.name;
	branch = req.body.branch;
	section = req.body.section;
	cid = req.user['main_id'];
	status = req.body.status;

	db.query('select name from company where id=?',[cid],function(err,ress){
		if(err) throw err;

		cname = ress[0].name;

		db.query('insert into placed values(?,?,?,?,?,?,?);delete from applied where sid=?',[sid,name,cid,section,branch,cname,status,sid],function(err){
				if(err) throw err;

				res.redirect('/profile');
		});

	});

});

router.get('/apply',function(req,res){
	let sql = 'select * from company';

	db.query(sql,function(err,results){
		if(err) throw err;

		res.render('user/companylist',{data:results});
	});
});

router.post('/apply',function(req,res){
	sid = req.user['main_id'];
	cid = req.body.cid;

	db.query('select * from student where id=?',[sid],function(err,results){

		name = results[0].name;
		branch = results[0].branch;
		section = results[0].section;

		db.query('insert into applied(cid,name,sid,branch,section) values(?,?,?,?,?)',[cid,name,sid,branch,section],function(err){
			if(err) throw err;

			res.render('user/companylist',{msg:' Appled Successfully!'});
		});

	});
});


module.exports = router;