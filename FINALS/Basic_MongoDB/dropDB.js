// Galang, Marius Kevin D.
// WD - 301

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db("BasicsActivityDBGalang");  
  const persons = db.collection("Persons");

 const result =  db.dropDatabase()

  console.log("Database Successfully Dropped")
  console.log(result)
}

run();
