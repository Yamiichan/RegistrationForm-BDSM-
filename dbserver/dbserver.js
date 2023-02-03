const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const db = require("./dbconfig.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({secret: "keyboard cat", resave: false, saveUninitialized: false}));


app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}));


app.get ('/getUser', (req,res) =>{
    res.send('hello world');
})
app.post('/register', (req,res) =>{
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const Address = req.body.Address;
    const OldTUPStudent = req.body.OldTUPStudent;
    const ReasonofRegistration = req.body.ReasonofRegistration;

    const query = "INSERT INTO users (FirstName, LastName, Email, PhoneNumber, Address, OldTUPStudent, ReasonofRegistration) VALUES (?,?,?,?,?,?,?)"
    db.query(query, [FirstName, LastName, Email, PhoneNumber, Address, OldTUPStudent, ReasonofRegistration], (err,rows) =>{
        if(err) {console.log(err);}
        res.send("Register Succcessfully");
    });
   
});

app.listen(3002, () => {console.log("Server started on port 3002")});



