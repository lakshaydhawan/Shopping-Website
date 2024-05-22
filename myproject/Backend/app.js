var express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors');
const mysql =require("mysql");

var app = express();
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"lakshayparth",
    database:"users",
    port:3306
})

connection.connect({
    if(error){
        console.log(error.message);
    }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post("/login",function(req,res){
    var email=req.body.data.email;
    var password=req.body.data.password;
    const insertQuery=`(Select * from user)`;
    var emailfound=0;
    connection.query(insertQuery,(error,result) =>{
       for(var i=0;i<result.length;i++){
        if(result[i].email==email && result[i].password==password){
            res.send("true");
            emailfound=1;
        }
       }
       if(emailfound==0){
        res.send("false");
       }
    })
 
});
app.post("/signup",function(req,res){
    var email=req.body.data.email;
    var password=req.body.data.password;
    var confirmpassword=req.body.data.confirmpassword;
    if(password!=confirmpassword){
        res.send("pp");
    }
    else{
        const insertQuery=`Insert Into user(email,password) Values('${email}','${password}')`;
        connection.query(insertQuery,(error) =>{
            if(error){
                res.send("false");
            } 
            else{
                res.send("true");
            }
        })
    }
    
  
   });
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});