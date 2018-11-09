var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/edit', function(req, res, next) {

		var db = require('../db');

		db.query('select is_admin,is_student,is_teacher,is_company from main where id=?',[req.user['main_id']],function(err,results){
			if(err) throw err;
				res.render('user/useredit',{id:req.user['main_id'],is_teacher:results[0].is_teacher,is_student:results[0].is_student,is_company:results[0].is_company});

		});
 	
		
});

router.post('/',function(req,res){

	var db = require('../db');

		db.query('select is_admin,is_student,is_teacher,is_company from main where id=?',[req.user['main_id']],function(err,results){


				if(results[0].is_student){

					

				}else if(results[0].is_teacher){

					//teacher

				}else {
					var id = req.body.cid;
					var name = req.body.name;
					var reg = req.body.registration;
					var year = req.body.year;
					var cgpa = req.body.cgpa;
					var percent = req.body.percentage;
					var mark = req.body.mark;

					db.query('insert into company values(?,?,?,?,?,?,?)',[id,name,reg,year,cgpa,percent,mark],function(error){
						if(error) throw error;

						res.redirect('/profile');
					});
				}

			

		});

});

module.exports = router;
