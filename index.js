const express = require('express');
const cors = require('cors');

const {MongoClient,ServerApiVersion} = require('mongodb');
require('dotenv').config();
const app = express();
app.use(cors());
const port = 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vtwog.mongodb.net/?retryWrites=true&w=majority`;
//console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        //console.log("Data base connected");

        app.post('/tasks',async(req,res)=>{
          console.log("Post Api");
        })
    }
    finally{

    }

}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})