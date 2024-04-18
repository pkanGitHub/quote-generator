const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { Int32 } = require('mongodb');

const mongoURI = "mongodb://127.0.0.1:27017/latestdb"

    try{
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Mongo connected')
    }
    catch(error){
        console.log(error)
        //process.exit()
    }
    
//////////////////////////////////
/// BASIC SCHEMA OF THE PROJECT //
//////////////////////////////////
const QuotesSchema = {
        id: Number,
        quote: String,
        author: String,
        topic: String,
    };
    
const Quotes = mongoose.model("Contact", QuotesSchema);

const schemaDefinition = Quotes.schema.obj;
console.log(schemaDefinition);
      

const app = express();

let obj ={"firstName":"John", "lastName":"Doe"}
posties = []
posties.push({content:"Hey dev post here", id:1})
app.use(cors(
  {
    
    origin: "*",
  }
));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//app.set(port);

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});


////////////////////////////////////////////
////// This sends out data for a test  /////
////////////////////////////////////////////
app.get('/data', (req, res) => {
  res.json(posties);
  //next();
  //res.console.log(obj);

});

/////////////////////////////////////////////
////// This accepts data for a test /////////
/////////////////////////////////////////////


app.post('/data2', (req, res) =>{
  res.send(req.body)
  posties.push(req.body)
  console.log(posties)
})



app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
  });
  
  app.get('/', (req, res) => {
    res.send('Successful response.');
    
  
  });
  

  const newData = new Quotes({
    id: 2,
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    topic: "inspirational"
})


newData.save()
.then(savedData => {
    console.log('Data saved successfully:', savedData);
})


Quotes.find()
    .then(data => {
        console.log('Retrieved data:', data);
    })
module.exports = app;
