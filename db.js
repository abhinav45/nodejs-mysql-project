var mysql=require("mysql");
var db = mysql.createConnection({
	multipleStatements:true,
	host:'localhost',
	user:'root',
	password:'',
	port:3325,
	database:'nodeauth'
});

db.connect(function(err){
	if(err) throw err;
	console.log('db connected');
});
module.exports=db;