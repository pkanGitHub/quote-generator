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

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(mongoURI);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Select the database and collection
        const database = client.db("Quote_Generator");
        const collection = database.collection("Quotes");
        
        
        
      disquotes = await collection.find({}).toArray(function(err, quotes) {if (err) {console.error('Error occurred while fetching quotes:', err);return;}console.log('All quotes:');console.log(quotes);});
      console.log(disquotes)
        //db.collection.find()
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
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
