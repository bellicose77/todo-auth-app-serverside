const express = require('express');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;

const {MongoClient,ServerApiVersion} = require('mongodb');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vtwog.mongodb.net/?retryWrites=true&w=majority`;
//console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const todoInfo = client.db("todoInfo");
        const todoTable = todoInfo.collection("todoTable");
        //console.log("Data base connected");

        app.post('/tasks',async(req,res)=>{
          const userdata = req.body;
          const result = await todoTable.insertOne(userdata);
          res.json(result);
          //console.log(userdata);
        });

        app.get('/tasks',async(req,res)=>{
          const alltask = todoTable.find({});
          const result = await alltask.toArray();
          res.json(result);
        });
        app.get('/tasks/:id',async(req,res)=>{
          const id = req.params.id;
          const query = {_id:ObjectId(id)};
          const result = await todoTable.findOne(query);
          res.json(result);

        });

        app.put('/tasks/:id',async(req,res)=>{
          const id = req.params.id;
          const data = req.body;
          const filter = {_id:ObjectId(id)}
          console.log(data);
        })

        app.delete('/tasks/:id',async(req,res)=>{
          const id = req.params.id;
          const query = {_id:ObjectId(id)};
          const result = await todoTable.deleteOne(query);
          res.json(result);

        })
    }
    finally{

    }

}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})