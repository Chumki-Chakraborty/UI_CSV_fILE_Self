const express=require("express")
const { HomePage, AddUser_Page, AddCsvFile } = require("../Controller/CsvController")
const Upload=require("../Utilits/CsvFileUpload")
const CsvRoute=express.Router()

CsvRoute.get("/",HomePage)
CsvRoute.get("/adduser",AddUser_Page)
CsvRoute.post("/upload/file",Upload.single("file"),AddCsvFile)

module.exports=CsvRoute