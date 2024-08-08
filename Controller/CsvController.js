const CsvModel = require("../Model/CsvModel")
const csv = require("csvtojson")
const path = require("path")
const fs=require("fs")
const flash=require("connect-flash")
const HomePage = (req, res) => {
    res.render("Home", {
        title: "Home Page",
        message:req.flash("message")
    })
}

const AddUser_Page = async(req, res) => {
    const Data=await CsvModel.find()
    res.render("AddUser", {
        title: "AddUser Page",
        message1:req.flash("message1"),
        csvdata:Data
    })
}
// ----------------AddCsvFile------------//
const AddCsvFile = async (req, res) => {
    try {
        const UserData = []
        csv()
            .fromFile(req.file.path)
            .then(async (response) => {
                for (let x = 0; x<response.length; x++) {
                    UserData.push({
                        name:response[x].name,
                        email:response[x].email,
                        location:response[x].location,
                        mobile:response[x].mobile
                    })
                }
                const SaveFile=await CsvModel.insertMany(UserData)
               
                
               if(SaveFile){
                
                console.log(`Csv File has been uploded..`);
                req.flash("message","Csv File has been uploded..")
                return res.redirect("/")
               }
               
            })

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    HomePage,
    AddUser_Page,
    AddCsvFile
}