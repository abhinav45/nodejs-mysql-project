var express = require('express');
var router = express.Router();
var expressValidator=require('express-validator');
var passport=require('passport');
var bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;


router.get('/createtable1',function(req,res){
	var db = require('../db');
	db.query('create table student(id int, name varchar(255), usn varchar(255), email varchar(5), phoneno varchar(10), dob varchar(10), sex varchar(10),section varchar(10),branch varchar(10),year_of_passing varchar(10),backlog varchar(10),cgpa varchar(10),percentage varchar(10),mark varchar(10),foreign key (id) references main(id) on delete cascade)',function(err){
		if(err) throw err;
		res.send('Table Created.')
	});
});

router.get('/createtable2',function(req,res){
	var db = require('../db');
	db.query('create table teacher(id int, name varchar(255), department varchar(255), age varchar(5), sex varchar(10), foreign key (id) references main(id) on delete cascade)',function(err){
		if(err) throw err;
		res.send('Table Created.')
	});
});

router.get('/createtable',function(req,res){
	var db = require('../db');
	db.query('create table company(id int, name varchar(255), registration varchar(255), year varchar(5), cgpa varchar(10), percentage varchar(10), foreign key (id) references main(id) on delete cascade)',function(err){
		if(err) throw err;
		res.send('Table Created.')
	});
});



router.get('/',function(req,res){
	res.render('home');
});
/* GET home page. */
router.get('/home',function(req,res){
	res.redirect('/');
});


router.get('/home', function(req, res, next) {
	  res.render('home', { title: 'home' });
	});

router.get('/profile', function(req, res, next){
		var db = require('../db');

		if(req.query.id != null){

			db.query('select * from student where id=?',[req.query.id],function(err,results){
						res.render('profile',{results:results[0]});
					});

		}else {
			db.query('select is_admin,is_student,is_teacher,is_company from main where id=?',[req.user['main_id']],function(err,results){

				console.log(results[0].is_student);
				if(results[0].is_student){

					db.query('select * from student where id=?',[req.user['main_id']],function(err,results){
						res.render('profile',{results:results[0]});
					});

				}else if(results[0].is_teacher){

					db.query('select * from teacher where id=?',[req.user['main_id']],function(err,results){
						res.render('tprofile',{results:results[0]});
					});

				}else if(results[0].is_admin){


					res.redirect('/admin');



				}else {

					db.query('select * from company where id=?',[req.user['main_id']],function(err,results){
						res.render('cprofile',{results:results[0]});
					});
				}

			

		});
		}



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

			if(req.query.id != null ){

			const id = req.query.id;
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

			

			let sql = "UPDATE student SET id='"+id+"',name='"+name+"', usn='"+usn+"',email='"+email+"',phoneno='"+phoneno+"',dob='"+dob+"',sex='"+sex+"',section='"+section+"',branch='"+branch+"',year_of_passing='"+year_of_passing+"',backlog='"+backlog+"',cgpa='"+cgpa+"',percentage='"+percentage+"',mark='"+mark+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('/profile');
				
			});

			}else {
				const id = req.user['main_id'];
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

			

			let sql = "UPDATE student SET id='"+id+"',name='"+name+"', usn='"+usn+"',email='"+email+"',phoneno='"+phoneno+"',dob='"+dob+"',sex='"+sex+"',section='"+section+"',branch='"+branch+"',year_of_passing='"+year_of_passing+"',backlog='"+backlog+"',cgpa='"+cgpa+"',percentage='"+percentage+"',mark='"+mark+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('/profile');
				
			});
			}

			


 


					
						
		}
	});		
					

	router.get('/edit', function(req, res, next){

			var db = require('../db');

			db.query('select * from student where id=?',[req.query.id],function(err,results,fields){
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

			if(req.query.id != null ){
			const id = req.body.id;
			const name=req.body.name;
			const department=req.body.department;
			
			
			const age=req.body.age;
			const sex=req.body.sex;
			

			const db=require('../db.js');

			console.log("user id: "+id)

			let sql = "UPDATE teacher SET id='"+id+"',name='"+name+"',department='"+department+"',age='"+age+"',sex='"+sex+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('/profile');
			});

		}else{
			const id = req.user['main_id'];
			const name=req.body.name;
			const department=req.body.department;
			
			
			const age=req.body.age;
			const sex=req.body.sex;
			

			const db=require('../db.js');

			console.log("user id: "+id)

			let sql = "UPDATE teacher SET id='"+id+"',name='"+name+"',department='"+department+"',age='"+age+"',sex='"+sex+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('/profile');
			});
 



		}
 


					
						
		}
	});	


	router.get('/tedit', function(req, res, next){

			
			var db = require('../db');

			db.query('select * from teacher where id=?',[req.query.id],function(err,results,fields){
				if(err) throw err;

					//console.log(results[0]);
				res.render('tedit',{results:results[0]});
				
			});

			
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
			if(req.query.id != null ){
			const id = req.body.id;
			const name=req.body.name;
			const registration=req.body.registration;
			const year=req.body.year;
			const cgpa=req.body.cgpa;
			const percentage=req.body.percentage;
			const mark=req.body.mark; 
			

			const db=require('../db.js');

			
			let sql = "UPDATE company SET id='"+id+"',name='"+name+"',registration='"+registration+"',year='"+year+"',cgpa='"+cgpa+"',percentage='"+percentage+"',mark='"+mark+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('/profile');
			});
			}else {
			const id = req.user['main_id'];
			const name=req.body.name;
			const registration=req.body.registration;
			const year=req.body.year;
			const cgpa=req.body.cgpa;
			const percentage=req.body.percentage;
			const mark=req.body.mark; 
			

			const db=require('../db.js');

			
			let sql = "UPDATE company SET id='"+id+"',name='"+name+"',registration='"+registration+"',year='"+year+"',cgpa='"+cgpa+"',percentage='"+percentage+"',mark='"+mark+"' WHERE id="+id+"";

			db.query(sql,function(err,results,fields){

				if(err) throw err;

				res.redirect('/profile');
			});
		}
 
 


					
						
		}
	});	


	router.get('/cedit', function(req, res, next){

			
			var db = require('../db');

			
			db.query('select * from company where id=?',[req.query.id],function(err,results,fields){
				if(err) throw err;

					//console.log(results[0]);
				res.render('cedit',{results:results[0]});
			});

			//res.render('profile', { title: 'profile'});
	});	


  router.get('/register', function(req, res, next) {
	  res.render('register', {});
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
		successRedirect:'/profile',
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

			let sql = "delete from student where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					
				res.redirect("admin");
				
			});

			
	});	

	router.post('/admin', function(req, res, next){

			console.log("id: "+req.body.id);

			var id = req.body.id;

			var db = require('../db');

			let sql = "delete from teacher where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					
				res.redirect("admin");
				
			});

			
	});	




	router.post('/admin', function(req, res, next){

			console.log("id: "+req.body.id);

			var id = req.body.id;

			var db = require('../db');

			let sql = "delete from company where id="+id+"";

			db.query(sql,function(err,results,fields){
				if(err) throw err;

					
				res.redirect("admin");
				
			});

			
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
	  res.redirect('/login');
	});


router.post('/register', function(req, res, next) {


		req.checkBody('username','username field cannot be empty').notEmpty();
		// req.checkBody('username','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		 // req.checkBody('password','password must be between 8-100 character long').len(8,100);
		 // req.checkBody('passwordMatch','password must be between 8-100 character long ').len(8,100);
		req.checkBody('passwordMatch','passwords do not match,please try again  ').equals(req.body.password);

		const errors=req.validationErrors();
		if(errors){
			console.log('errors:${JSON.stringify(errors)}');
			res.render('register',{
				title:'registration error',
				errors:errors
			});

		}else {

			const username=req.body.username;
			const email=req.body.email;
			const password=req.body.password;
			
			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){


				if(req.body.is_admin !=null){
						var is_admin = Number(req.body.is_admin);
						db.query('INSERT INTO  main(username,email,password,is_admin) VALUES(?,?,?,?)',[username,email,hash,is_admin], 
							function(error,results,fields){
								if(error) throw error;
								db.query('select last_insert_id() as  main_id',function(error,results,fields){
									if(error) throw error;

									console.log(results[0]);
									const main_id=results[0];
									req.login(main_id,function(err){
										// res.redirect('/users');
					
								 });
							});
				   });
				}


			if(req.body.is_student !=null){
				var is_student = Number(req.body.is_student);
				db.query('INSERT INTO  main(username,email,password,is_student) VALUES(?,?,?,?)',[username,email,hash,is_student],
				 function(error,results,fields){
					if(error) throw error;
					db.query('select last_insert_id() as  main_id',function(error,results,fields){
						if(error) throw error;

						console.log(results[0]);
						const main_id=results[0];
						req.login(main_id,function(err){
							res.redirect('/users/edit');
						});
					});	
		
		});

	}


		if(req.body.is_teacher !=null){
					var is_teacher = Number(req.body.is_teacher);
					
						db.query('INSERT INTO  main(username,email,password,is_teacher) VALUES(?,?,?,?)',[username,email,hash,is_teacher], 
							function(error,results,fields){
								if(error) throw error;
						db.query('select last_insert_id() as  main_id',function(error,results,fields){
								if(error) throw error;

							console.log(results[0]);
							const main_id=results[0];
							req.login(main_id,function(err){
								// res.render('register',{title:'Registration complete'});
								res.redirect('/users/edit');
							});
						});
		});
	}


		if(req.body.is_company !=null){
					var is_company = Number(req.body.is_company);
					
						db.query('INSERT INTO  main(username,email,password,is_company) VALUES(?,?,?,?)',[username,email,hash,is_company], 
							function(error,results,fields){
								if(error) throw error;
						db.query('select last_insert_id() as  main_id',function(error,results,fields){
								if(error) throw error;

							console.log(results[0]);
					const main_id=results[0];
							req.login(main_id,function(err){
								console.log();
								// res.render('register',{title:'Registration complete'});
								res.redirect('/users/edit');
	
				});
			});
	 	});
	 }


		});		
	}

});


//for student details//

router.post('/student', function(req, res, next) {


		req.checkBody('name','username field cannot be empty').notEmpty();
		req.checkBody('name','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		// req.checkBody('password','password must be between 8-100 character long').len(8,100);
		const errors=req.validationErrors();
		if(errors){
			console.log(JSON.stringify(errors));
			res.render('student',{
				title:' error',
				errors:errors
			});

		}else {
			var id = req.body.sid;
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
 


			//bcrypt.hash(password,null,null,function(err,hash){
						db.query('INSERT INTO  student(id,name,usn,email,phoneno,dob,sex,section,branch,year_of_passing,backlog,cgpa,percentage,mark) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[id,name,usn,email,phoneno,dob,sex,section,branch,year_of_passing,backlog,cgpa,percentage,mark], function(error,results,fields){
				if(error) throw error;
				//db.query('select last_insert_id() as student_id',function(error,results,fields){
				//	if(error) throw error;

			//	console.log(results[0]);
			//	const student_id=results[0];
			//	req.login(student_id,function(err){
					res.render('student',{title:' complete'});
					
				});
				
					
						
					
				//	});
				   
				
				//});
			//});
			
	



			
		
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



router.post('/admin/add', function(req, res, next) {

		req.checkBody('username','username field cannot be empty').notEmpty();
		// req.checkBody('username','username must be between 4-15 character long').len(4,25);
		req.checkBody('email','the email you entered is invalid,please try again').isEmail();
		req.checkBody('email','email address must be between 4-100 characters long,please try again').len(4,100);
		 // req.checkBody('password','password must be between 8-100 character long').len(8,100);
		 // req.checkBody('passwordMatch','password must be between 8-100 character long ').len(8,100);
		req.checkBody('passwordMatch','passwords do not match,please try again  ').equals(req.body.password);

		const errors=req.validationErrors();
		if(errors){
			console.log('errors:${JSON.stringify(errors)}');
			res.render('register',{
				title:'registration error',
				errors:errors			});

		}else {

			const username=req.body.username;
			const email=req.body.email;
			const password=req.body.password;
			
			const db=require('../db.js');
 


			bcrypt.hash(password,null,null,function(err,hash){


				if(req.body.is_admin !=null){
						var is_admin = Number(req.body.is_admin);
						db.query('INSERT INTO  main(username,email,password,is_admin) VALUES(?,?,?,?)',[username,email,hash,is_admin], 
							function(error,results,fields){
								if(error) throw error;
								
								res.redirect('/admin');
				   });
				}


			if(req.body.is_student !=null){
				var is_student = Number(req.body.is_student);
				db.query('INSERT INTO  main(username,email,password,is_student) VALUES(?,?,?,?)',[username,email,hash,is_student],
				 function(error,results,fields){
					if(error) throw error;
					res.redirect('/admin');
		
		});

	}


		if(req.body.is_teacher !=null){
					var is_teacher = Number(req.body.is_teacher);
					
						db.query('INSERT INTO  main(username,email,password,is_teacher) VALUES(?,?,?,?)',[username,email,hash,is_teacher], 
							function(error,results,fields){
								if(error) throw error;
						res.redirect('/admin');
		});
	}


		if(req.body.is_company !=null){
					var is_company = Number(req.body.is_company);
					
						db.query('INSERT INTO  main(username,email,password,is_company) VALUES(?,?,?,?)',[username,email,hash,is_company], 
							function(error,results,fields){
								if(error) throw error;
						db.query('select last_insert_id() as  main_id',function(error,results,fields){
								if(error) throw error;

							console.log(results[0]);
					const main_id=results[0];
							req.login(main_id,function(err){
								console.log();
								// res.render('register',{title:'Registration complete'});
								res.redirect('/users/edit');
	
				});
			});
	 	});
	 }


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
  
	