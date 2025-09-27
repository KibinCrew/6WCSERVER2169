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

  const result = await persons.updateMany(
    {country: "USA"},
    { $inc: {appearances: 1}}
  )
  console.log( await persons.find({country: "USA"}).toArray())

  await client.close();
}

run();
