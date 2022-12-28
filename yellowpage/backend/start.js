/*
const cors = require('cors');
var fs=require("fs");
var express=require("express");
var bodyparser=require("body-parser");
var multer = require('multer');
var path=require('path');
var formidable=require("formidable");
// const User=require('../model/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/user');
const businessMod=require("./businessModel.js")
var db=mongoose.connection;
var app=express()

app.use(cors())
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({
    extended: false
}));

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

const Storage=multer.diskStorage(
    {
        destination:'uploads',
        filename:(req,file,cb) => {
            cb(null,file.originalname)
        }
    }
);

const upload=multer({
    storage:Storage
}).single('image');
  


app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
          console.log(err);
        }
        else{
         
            const newBusiness=new businessMod({
                Businessname:req.body.Businessname,
                Owner:req.body.Owner,
                address:req.body.address,
                number:req.body.number,
                landline:req.body.landline,
                email:req.body.email,
                url:req.body.url,
                hours:req.body.hours,
                hours2:req.body.hours2,
                workdays:req.body.workdays,
                about:req.body.about,
                category:req.body.category,
                sub_category:req.body.sub_category,
                keyword:req.body.keyword,
             
                image:{
                   // data:"project\public\logo192.png",
                   data:req.file.filename,
                    contentType:"image/jpeg"
                }
            })
     
            db.collection("login").insertOne(newBusiness,function(err,res){
                if(err) throw err;
                console.log("1 Document inserted");
                //db.close();
            })
   
       }
    })
    res.send("<h1>INSERTED</h1>")
        }
    )




app.get('/getimage',async (req,res)=>{
  const allData = await businessMod.find()
  res.send(allData)
  console.log(allData);
})


app.get('/searched', (req, res) => {
  db.collection("login").findOne({}, function(err, result) {
      if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
      }
      else {
        console.log(result);
          res.send(result);
      }
  });
});
// app.get('/getimage',(req,res)=>{

// })

app.get('/', function(req,res){
 res.sendFile(__dirname+'/index.html');
})



app.listen(8080);

*/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const port = 8080;
const fs = require("fs");
const imageModel = require("./models");
const json=require("F:/project2/testing/public/keyword.json")
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    'mongodb://127.0.0.1:27017/user',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("it has an error", err));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single('image');
var keywords=[];
app.post("/upload", upload, (req, res) => {
  console.log(req.body.tags)
keywords=(req.body.tags).split(",");
keywords.push("tfddrgr");
  const saveImage =  imageModel({
    Businessname:req.body.Businessname,
    Owner:req.body.Owner,
    address:req.body.address,
    number:req.body.number,
    landline:req.body.landline,
    email:req.body.email,
    url:req.body.url,
    hours:req.body.hours,
    hours2:req.body.hours2,
    workdays:req.body.workdays,
    about:req.body.about,
    category:req.body.category,
    sub_category:req.body.sub_category,
    keyword: keywords,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
      console.log(typeof(keywords));
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});


app.post('/search',async (req,res)=>{
  var allData;
  console.log(req.body);
  if(req.body.searched !=undefined){
    console.log(req.body.searched);
  allData = await imageModel.find({keyword: {$in: [req.body.searchTerm]}});
  }
  else{
    console.log("dSBFB ");
    console.log(req.body.searched);
    allData = await imageModel.find(); 
  }
  res.json(allData)
  console.log("allData");
})

app.post('/addkeyword',(req,res)=>{
  saveNewAddress(req.body)
  .then(result => {
    console.log(result);
    res.send(result); 
})
})
function saveNewAddress(address) {    
  return new Promise((resolve, reject) => {
    json.push(address)    
    fs.writeFile('F:/project2/testing/public/address-list.json', JSON.stringify(json), (err) => {
      if (err) reject(err)
      resolve("File saved.")
    })
  });
}

app.listen(port, () => {
  console.log("server running successfully");
});