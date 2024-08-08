const express=require("express")
const ejs=require("ejs")
const path=require("path")
const app=express()
var flash = require('connect-flash');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dotenv=require("dotenv")
dotenv.config()
const Mongodb_connection=require("./Config/Database")
Mongodb_connection()
app.set("view engine","ejs")
app.set("views","views")
app.use(express.static(path.join(__dirname,"public")))
app.use(flash());
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {  maxAge: 60000 }
  }))
// -----------CsvRoute----------//
const CsvRoute=require("./Router/CsvRouter")
app.use(CsvRoute)

const port=3232
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})