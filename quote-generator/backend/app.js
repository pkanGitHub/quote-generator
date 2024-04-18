const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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
  
  
module.exports = app;
