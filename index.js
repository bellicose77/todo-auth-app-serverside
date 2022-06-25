const express = require('express');
const app = express();
const port = 5000;
TODODB
Ig9ob18XsqRwLcak
const uri = "mongodb+srv://<username>:<password>@cluster0.vtwog.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
    }
    finally{

    }

}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})