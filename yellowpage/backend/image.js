const cors = require('cors');
var fs=require("fs");
var express=require("express");
var bodyparser=require("body-parser");
var multer = require('multer');
var path=require('path');
var formidable=require("formidable");
// const User=require('../model/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user');
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
// const upload = multer({
//   dest: 'images'
//   })
//Storage
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
                    data:"project\public\logo192.png",
                    contentType:"image/jpeg"
                }
            })
        var myobj={
            business:newBusiness
        };
            db.collection("login").insertOne(myobj,function(err,res){
                if(err) throw err;
                console.log("1 Document inserted");
                //db.close();
            })
        }
    })
res.send("<h1>INSERTED</h1>")
})
// app.get('/searched',async (req,res)=>{
//   const allData = await businessMod.find()
//   res.send(allData)
// })


app.get('/searched', (req, res) => {
  db.collection("login").findOne({"business.Owner":"muni"}, function(err, result) {
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

app.post('/uploadimage',(req,res)=>{
  upload(req,res,(err)=>{
      if(err){
        console.log(err);
      }
      else{
       
          const newBusiness=new businessMod({
               //Businessname:req.body.businessname,
              // Owner:req.body.Owner,
              // address:req.body.address,
              // number:req.body.number,
              // landline:req.body.landline,
              // email:req.body.email,
              // url:req.body.url,
              // hours:req.body.hours,
              // hours2:req.body.hours2,
              // workdays:req.body.workdays,
              // about:req.body.about,
              // category:req.body.category,
              // sub_category:req.body.sub_category,
              // keyword:req.body.keyword,
           
              image:{
                  data:req.file.filename,
                  contentType:"image/jpeg"
              }
          })
      var myobj={
          business:newBusiness
      };
      db.collection("login").update({Businessname:req.body.businessname},{$set:{image:myobj}},function(err,res){
        if(err) throw err;
        console.log("1 Document updated");
        //db.close();
    })
  //   db.collection("login").insertOne(myobj,function(err,res){
  //     if(err) throw err;
  //     console.log("1 Document inserted");
  //     //db.close();
  // })
          
      }
  })
res.send("<h1>INSERTED</h1>")
})


    
  
app.get('/', function(req,res){
 res.sendFile(__dirname+'/index.html');
})


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   });
  
//   const upload = multer({ storage: storage });
  
//   app.post("/upload", upload.single("testImage"), (req, res) => {
//     const saveImage =  imageModel({
//       name: req.body.name,
//       img: {
//         data: fs.readFileSync("uploads/" + req.file.filename),
//         contentType: "image/png",
//       },
//     });
//     saveImage
//       .save()
//       .then((res) => {
//         console.log("image is saved");
//       })
//       .catch((err) => {
//         console.log(err, "error has occur");
//       });
//       res.send('image is saved')
//   });

app.listen(8080);