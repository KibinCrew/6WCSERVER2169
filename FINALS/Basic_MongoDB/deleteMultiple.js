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

  persons.deleteMany({appearances: {$exists: true}})
  persons.deleteMany({apperances: {$exists: true}})

  console.log("Field Successfully Deleted")
  console.log( await persons.find().toArray())

}

run();
