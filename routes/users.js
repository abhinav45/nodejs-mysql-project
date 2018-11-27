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
					var id = req.body.sid;
					var name = req.body.name;
					var usn = req.body.usn;
					var email= req.body.email;
					var phoneno = req.body.phoneno;
					var dob = req.body.dob;
					var sex = req.body.sex;
					var section = req.body.section;
					var branch = req.body.branch;
					var year_of_passing = req.body.year_of_passing;
					var backlog = req.body.backlog;
					var cgpa = req.body.cgpa;
					var percentage = req.body.percentage;
					var mark = req.body.mark;






					
					db.query('insert into student values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[id,name,usn,email,phoneno,dob,sex,section,branch,year_of_passing,backlog,cgpa,percentage,mark],function(error){
						if(error) throw error;

						res.redirect('/profile');
					});



					

				}else if(results[0].is_teacher){

					
					 var id = req.body.tid;
					var name = req.body.name;
					var department= req.body.department;
					var age = req.body.age;
					var sex = req.body.sex;
					
					db.query('insert into teacher values(?,?,?,?,?)',[id,name,department,age,sex],function(error){
						if(error) throw error;

						res.redirect('/profile');
					});

					
				}else if(results[0].is_admin){
					res.redirect('/profile');

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
