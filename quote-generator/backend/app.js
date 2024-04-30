const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { Int32 } = require('mongodb');

//const mongoURI = "mongodb+srv://smc6fd:<Jojo12!!>@quotes.gl9jofc.mongodb.net/?retryWrites=true&w=majority"
//const uri = "mongodb+srv://smc6fd:<password>@quotes.gl9jofc.mongodb.net/?retryWrites=true&w=majority";

const mongoURI = "mongodb+srv://user-cool:stellaiscool@quotes.gl9jofc.mongodb.net/?retryWrites=true&w=majority";
var db;
const { MongoClient } = require('mongodb');
const { error } = require('console');
mongoose.connect(mongoURI)

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(mongoURI);
posties = []
var disquotes;

async function run() {
    try {
        // Connect the client to the server
        await client.connect().catch(console.log("BRUH"));

        // Select the database and collection
        const database = client.db("Quote_Generator");
        const collection = database.collection("Quotes");
        
        
        
      disquotes = await collection.find({}).toArray(function(err, quotes) {if (err) {console.error('Error occurred while fetching quotes:', err);return;}console.log('All quotes:');console.log(quotes);});
      console.log(disquotes)
      db = JSON.stringify(disquotes)
      posties.push(disquotes)
        //db.collection.find()
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
async function postdata(newData){
    posties[0].push(newData)
    
    const newestData = new Quotes({   
    
    id: posties.length+1,
    quote: newData.quote,
    author: newData.author,
    topic: newData.topic})

  ////console.log(JSON.stringify(newestData))
  //newestData.id = posties.length+1
  try{
    await client.connect(() => {
      const database = client.db("Quote_Generator");
      const collection = database.collection("Quotes");
      db.collection.insertOne(newestData);
      console.log("WE IN THE CLINET BBY")
    })
    disquotes = await collection.insertOne(newestData);
    
    newestData.save().then(savedData => {
      console.log('Data saved successfully:', savedData)})
  }
  catch(e){
    console.log(e)
  }

}
const database = client.db("Quote_Generator");
const collection = database.collection("Quotes");

run().catch(console.dir);
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
//console.log(schemaDefinition);
      

const app = express();

let obj ={"firstName":"John", "lastName":"Doe"}

//posties.push({content:"Hey dev post here", id:1})
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
  //objj = run()
  //var PushedDb =JSON.stringify (posties)
  //res.json(PushedDb);
  res.json(posties)
  //console.log(posties)
  for( post in posties)
  {
    console.log("POST", post)
  }
  try{
    res.send(JSON.stringify(posties[0]))
  }
  catch{
    console.log("data sent")
  }
  //res.send(posties);
  
  //return
  //res.console.log(typeof(db));

});

/////////////////////////////////////////////
////// This accepts data for a test /////////
/////////////////////////////////////////////


app.post('/data2', (req, res) =>{
  console.log("ABOUT TO POST DATA" + req.body)
  res.send(posties)
  postdata(req.body)
 
  console.log(req.body)
})



app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
  });
  
  app.get('/', (req, res) => {
    res.send('Successful response.');
    
  
  });
  

//   const newData = new Quotes({
//     id: 2,
//     quote: "The way to get started is to quit talking and begin doing.",
//     author: "Walt Disney",
//     topic: "inspirational"
// })

/*
newData.save()
.then(savedData => {
    console.log('Data saved successfully:', savedData);
})
*/

// Quotes.find()
//     .then(data => {
//         console.log('Retrieved data:', data);
//     })

module.exports = app;
