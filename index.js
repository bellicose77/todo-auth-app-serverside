const express = require('express');
const {MongoClient,ServerApiVersion} = require('mongodb');
const app = express();
const port = 5000;
const uri = "mongodb+srv://<username>:<password>@cluster0.vtwog.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
    }
    finally{

    }

}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})