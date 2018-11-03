var express = require('express');
var router = express.Router();
var expressValidator=require('express-validator');
var passport=require('passport');
var bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;


/* GET home page. */
router.get('/home',function(req,res){
	console.log(req.user);
	console.log(req.isAuthenticated()); 
	 res.render('home');
});


router.get('/home', function(req, res, next) {
	  res.render('home', { title: 'home' });
	});

	router.get('/profile', function(req, res, next){

			console.log("id: "+req.query.id);

			var id = req.query.id;

			var db = require('../db');

			let sql = "select * from student where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					console.log(results[0]);
				res.render('profile',{results:results[0]});
				
			});

			//res.render('profile', { title: 'profile'});
	});

	router.get('/tprofile', function(req, res, next) {
		console.log("id: "+req.query.id);

			var id = req.query.id;

			var db = require('../db');

			let sql = "select * from teacher where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					console.log(results[0]);
				
				
	  res.render('tprofile', { results:results[0] });
	});

		});
	router.get('/cprofile', function(req, res, next) {
		console.log("id: "+req.query.id);

			var id = req.query.id;

			var db = require('../db');

			let sql = "select * from company where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					console.log(results[0]);
				
	  res.render('cprofile', {results:results[0]});
	});

		});

	router.post('/edit', function(req, res, next) {

		req.checkBody('name','username field cannot be empty').notEmpty();
		req.checkBody('name','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		const errors=req.validationErrors();
		if(errors){
			console.log(JSON.stringify(errors));
			res.render('edit',{
				title:' error',
				errors:errors
			});

		}else {

			const id = req.body.id;
			const name=req.body.name;
			const usn=req.body.usn;
			const email=req.body.email;
			
			const phoneno=req.body.phoneno;
			const dob=req.body.dob;
			const sex=req.body.sex;
			const section=req.body.section;
			const branch=req.body.branch;
			const year_of_passing=req.body.year_of_passing;
			const backlog=req.body.backlog;
			const cgpa=req.body.cgpa;

			const percentage=req.body.percentage;
			const mark=req.body.mark;

			const db=require('../db.js');

			console.log("user id: "+id)

			let sql = "UPDATE student SET name='"+name+"',email='"+email+"',phoneno='"+phoneno+"',dob='"+dob+"',sex='"+sex+"',section='"+section+"',branch='"+branch+"',year_of_passing='"+year_of_passing+"',backlog='"+backlog+"',cgpa='"+cgpa+"',percentage='"+percentage+"',mark='"+mark+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('admin');
			});
 


					
						
		}
	});		
					

	router.get('/edit', function(req, res, next){

			console.log("id: "+req.query.id);

			var id = req.query.id;

			var db = require('../db');

			let sql = "select * from student where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					//console.log(results[0]);
				res.render('edit',{results:results[0]});
				
			});

			//res.render('profile', { title: 'profile'});
	});





	router.post('/tedit', function(req, res, next) {

		req.checkBody('name','username field cannot be empty').notEmpty();
		req.checkBody('name','username must be between 4-15 character long').len(4,25);
		
		const errors=req.validationErrors();
		if(errors){
			console.log(JSON.stringify(errors));
			res.render('tedit',{
				title:' error',
				errors:errors
			});

		}else {

			const id = req.body.id;
			const name=req.body.name;
			const tid=req.body.tid;
			const department=req.body.department;
			
			const age=req.body.age;
			

			const db=require('../db.js');

			console.log("user id: "+id)

			let sql = "UPDATE teacher SET name='"+name+"',tid='"+tid+"',department='"+department+"',age='"+age+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('admin');
			});
 


					
						
		}
	});	


	router.get('/tedit', function(req, res, next){

			console.log("id: "+req.query.id);

			var id = req.query.id;

			var db = require('../db');

			let sql = "select * from teacher where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					//console.log(results[0]);
				res.render('tedit',{results:results[0]});
				
			});

			//res.render('profile', { title: 'profile'});
	});	



	router.post('/cedit', function(req, res, next) {

		req.checkBody('name','username field cannot be empty').notEmpty();
		req.checkBody('name','username must be between 4-15 character long').len(4,25);
		
		const errors=req.validationErrors();
		if(errors){
			console.log(JSON.stringify(errors));
			res.render('cedit',{
				title:' error',
				errors:errors
			});

		}else {

			const id = req.body.id;
			const name=req.body.name;
			const registration=req.body.registration;
			const year=req.body.year;
			

			const db=require('../db.js');

			console.log("user id: "+id)

			let sql = "UPDATE company SET name='"+name+"',registration='"+registration+"',year='"+year+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('admin');
			});
 


					
						
		}
	});	


	router.get('/cedit', function(req, res, next){

			console.log("id: "+req.query.id);

			var id = req.query.id;

			var db = require('../db');

			let sql = "select * from company where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					//console.log(results[0]);
				res.render('cedit',{results:results[0]});
				
			});

			//res.render('profile', { title: 'profile'});
	});	


   router.get('/adminregistration', function(req, res, next) {
	  res.render('adminregistration', {});
	});




	router.get('/studentregistration', function(req, res, next) {
	  res.render('studentregistration', {});
	});

	router.get('/teacherregistration', function(req, res, next) {
	  res.render('teacherregistration', {});
	});

	router.get('/companyregistration', function(req, res, next) {
	  res.render('companyregistration', {});
	});



	router.get('/login', function(req, res, next) {
	  res.render('login', { title: 'login ' });
	});

	router.post('/login',passport.authenticate('local',{
		successRedirect:'/admin',
		failureRedirect:'/login'
	})); 



	

	router.get('/admin',authenticationMiddleware(), function(req, res, next) {
		var db=require('../db.js');
		
		db.query("SELECT * FROM student;select * from teacher;select * from company",function(err,results,fields){
			if (err) throw err;
			console.log(results);
		
	  res.render('admin', { title: 'data are fetches',studentdata:results[0],teacherdata:results[1],companydata:results[2]});
	});
		

	});

	


	//for remove button//

	router.post('/admin', function(req, res, next){

			console.log("id: "+req.body.id);

			var id = req.body.id;

			var db = require('../db');

			let sql = "delete from company where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					//console.log(results[0]);
				// res.render('admin',{results:results[0]});
				res.redirect("admin");
				
			});

			//res.render('profile', { title: 'profile'});
	});	


	router.get('/student',authenticationMiddleware(), function(req, res, next) {
	  res.render('student', { title: 'student'});
	});

	router.get('/company',authenticationMiddleware(), function(req, res, next) {
	  res.render('company',{ title: 'company'});
	});

router.get('/teacher',authenticationMiddleware(), function(req, res, next) {
	  res.render('teacher', { title: 'teacher'});
	});

router.get('/logout', function(req,res) {
	req.logout();
	req.session.destroy();
	  res.redirect('/home');
	});

router.post('/adminregistration', function(req, res, next) {


		req.checkBody('username','username field cannot be empty').notEmpty();
		req.checkBody('username','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		 req.checkBody('password','password must be between 8-100 character long').len(8,100);
		 req.checkBody('passwordMatch','password must be between 8-100 character long ').len(8,100);
		req.checkBody('passwordMatch','passwords do not match,please try again  ').equals(req.body.password);

		const errors=req.validationErrors();
		if(errors){
			console.log('errors:${JSON.stringify(errors)}');
			res.render('adminregistration',{
				title:'registration error',
				errors:errors
			});

		}else {

			const username=req.body.username;
			const email=req.body.email;
			const password=req.body.password;

			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  adminregistration(username,email,password) VALUES (?,?,?)',[username,email,hash], function(error,results,fields){
				if(error) throw error;
				db.query('select last_insert_id() as adminregistration_id',function(error,results,fields){
					if(error) throw error;

				console.log(results[0]);
				const adminregistration_id=results[0];
				req.login(adminregistration_id,function(err){
					res.render('adminregistration',{title:'Registration complete'});
					
				});
				
					
						
					
					});
				   
				
				});
			});
			
	



			
		
		}
});




router.post('/studentregistration', function(req, res, next) {


		req.checkBody('username','username field cannot be empty').notEmpty();
		req.checkBody('username','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		 req.checkBody('password','password must be between 8-100 character long').len(8,100);
		 req.checkBody('passwordMatch','password must be between 8-100 character long ').len(8,100);
		req.checkBody('passwordMatch','passwords do not match,please try again  ').equals(req.body.password);

		const errors=req.validationErrors();
		if(errors){
			console.log('errors:${JSON.stringify(errors)}');
			res.render('studentregistration',{
				title:'registration error',
				errors:errors
			});

		}else {

			const username=req.body.username;
			const email=req.body.email;
			const password=req.body.password;

			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  studentregistration(username,email,password) VALUES (?,?,?)',[username,email,hash], function(error,results,fields){
				if(error) throw error;
				db.query('select last_insert_id() as studentregistration_id',function(error,results,fields){
					if(error) throw error;

				console.log(results[0]);
				const studentregistration_id=results[0];
				req.login(studentregistration_id,function(err){
					res.render('studentregistration',{title:'Registration complete'});
					
				});
				
					
						
					
					});
				   
				
				});
			});
			
	



			
		
		}
});

router.post('/teacherregistration', function(req, res, next) {


		req.checkBody('username','username field cannot be empty').notEmpty();
		req.checkBody('username','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		 req.checkBody('password','password must be between 8-100 character long').len(8,100);
		 req.checkBody('passwordMatch','password must be between 8-100 character long ').len(8,100);
		req.checkBody('passwordMatch','passwords do not match,please try again  ').equals(req.body.password);

		const errors=req.validationErrors();
		if(errors){
			console.log('errors:${JSON.stringify(errors)}');
			res.render('teacherregistration',{
				title:'registration error',
				errors:errors
			});

		}else {

			const username=req.body.username;
			const email=req.body.email;
			const password=req.body.password;

			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  teacherregistration(username,email,password) VALUES (?,?,?)',[username,email,hash], function(error,results,fields){
				if(error) throw error;
				db.query('select last_insert_id() as teacherregistration_id',function(error,results,fields){
					if(error) throw error;

				console.log(results[0]);
				const teacherregistration_id=results[0];
				req.login(teacherregistration_id,function(err){
					res.render('teacherregistration',{title:'Registration complete'});
					
				});
				
					
						
					
					});
				   
				
				});
			});
			
	



			
		
		}
});

router.post('/companyregistration', function(req, res, next) {


		req.checkBody('username','username field cannot be empty').notEmpty();
		req.checkBody('username','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		 req.checkBody('password','password must be between 8-100 character long').len(8,100);
		 req.checkBody('passwordMatch','password must be between 8-100 character long ').len(8,100);
		req.checkBody('passwordMatch','passwords do not match,please try again  ').equals(req.body.password);

		const errors=req.validationErrors();
		if(errors){
			console.log('errors:${JSON.stringify(errors)}');
			res.render('companyregistration',{
				title:'registration error',
				errors:errors
			});

		}else {

			const username=req.body.username;
			const email=req.body.email;
			const password=req.body.password;
			
			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  companyregistration(username,email,password) VALUES (?,?,?,?)',[username,email,hash], function(error,results,fields){
				if(error) throw error;
				db.query('select last_insert_id() as companyregistration_id',function(error,results,fields){
					if(error) throw error;

				console.log(results[0]);
				const companyregistration_id=results[0];
				req.login(companyregistration_id,function(err){
					res.render('companyregistration',{title:'Registration complete'});
					
				});
				
					
						
					
					});
				   
				
				});
			});
			
	



			
		
		}
});


//for student details//

router.post('/student', function(req, res, next) {


		req.checkBody('name','username field cannot be empty').notEmpty();
		req.checkBody('name','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		 req.checkBody('password','password must be between 8-100 character long').len(8,100);
		const errors=req.validationErrors();
		if(errors){
			console.log('errors:${JSON.stringify(errors)}');
			res.render('student',{
				title:' error',
				errors:errors
			});

		}else {

			const name=req.body.name;
			const usn=req.body.usn;
			const email=req.body.email;
			const password=req.body.password;
			const phoneno=req.body.phoneno;
			const dob=req.body.dob;
			const sex=req.body.sex;
			const section=req.body.section;
			const branch=req.body.branch;
			const year_of_passing=req.body.year_of_passing;
			const backlog=req.body.backlog;
			const cgpa=req.body.cgpa;

			const percentage=req.body.percentage;
			const mark=req.body.mark;

			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  student(name,usn,email,password,phoneno,dob,sex,section,branch,year_of_passing,backlog,cgpa,percentage,mark) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[name,usn,email,hash,phoneno,dob,sex,section,branch,year_of_passing,backlog,cgpa,percentage,mark], function(error,results,fields){
				if(error) throw error;
				db.query('select last_insert_id() as student_id',function(error,results,fields){
					if(error) throw error;

				console.log(results[0]);
				const student_id=results[0];
				req.login(student_id,function(err){
					res.render('student',{title:' complete'});
					
				});
				
					
						
					
					});
				   
				
				});
			});
			
	



			
		
		}
});

//teacher details//

router.post('/teacher', function(req, res, next) {


		req.checkBody('name','username field cannot be empty').notEmpty();
		req.checkBody('name','username must be between 4-15 character long').len(4,25);
		req.checkBody('password','password must be between 8-100 character long').len(8,100);

		const errors = req.validationErrors();

		if(errors){
			console.log(JSON.stringify(errors));
			res.render('teacher',{
				title:' error',
				errors:errors
			});

		}else {

			const name=req.body.name;
			const tid=req.body.tid;
			const password=req.body.password;
			const department=req.body.department;
			const age=req.body.age;
			const sex=req.body.sex;




			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  teacher(name,tid,password,department,age,sex) VALUES (?,?,?,?,?,?)',[name,tid,hash,department,age,sex], function(error,results,fields){
				if(error) throw error;
				db.query('select last_insert_id() as teacher_id',function(error,results,fields){
					if(error) throw error;

				console.log(results[0]);
				const teacher_id=results[0];
				req.login(teacher_id,function(err){
					res.render('teacher',{title:'complete'});
					
				});
				
					
						
					
					});
				   
				
				});
			});
			
	



			
		
		}
});

//company details//

router.post('/company', function(req, res, next) {


		req.checkBody('name','username field cannot be empty').notEmpty();
		req.checkBody('name','username must be between 4-15 character long').len(4,25);
		req.checkBody('password','password must be between 8-100 character long').len(8,100);

		const errors = req.validationErrors();

		if(errors){
			console.log(JSON.stringify(errors));
			res.render('company',{
				title:' error',
				errors:errors
			});

		}else {

			const name=req.body.name;
			const registration=req.body.registration;
			const password=req.body.password;
			const year=req.body.year;
			const cgpa=req.body.cgpa;
			const percentage=req.body.percentage;
			const mark=req.body.mark;




			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  company(name,registration,password,year,cgpa,percentage,mark) VALUES (?,?,?,?,?,?,?)',[name,registration,hash,year,cgpa,percentage,mark], function(error,results,fields){
				if(error) throw error;
				db.query('select last_insert_id() as company_id',function(error,results,fields){
					if(error) throw error;

				console.log(results[0]);
				const company_id=results[0];
				req.login(company_id,function(err){
					res.render('company',{title:'complete'});
					
				});
				
					
						
					
					});
				   
				
				});
			});
			
	



			
		
		}
});



passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
  
    done(null, user_id);
  });


function authenticationMiddleware(){
	return (req,res,next) => {
			if(req.isAuthenticated()) return next();
				res.redirect('/login')  
			
	}

}

module.exports = router;
  
	