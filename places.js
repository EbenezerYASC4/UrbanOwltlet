const express = require('express');
const mysql = require ("mysql");


//make connnection
const db = mysql.createConnection({
    host    :"localhost",
    user    :"root",
    password:"",
    database :"myuserdb"
});
    
//connect
db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log("my sql connected")
})
const app = express();

//Create db
app.get('/checkdb', (req, res)=>{  
    let sql = "select * from profiletb";
    db.query(sql, (err, result)=>{
        if (err)throw err;
        console.log(result);
        res.send(result);
    })
});
app.get('/addprofile', (req, res)=>{  
    
});

app.listen("3000", ()=> {
    console.log("Server started on port 3000");
})