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

  console.log( await persons.find({ firstname: "James"}).toArray())

  const result = await persons.updateOne(
    { id: 6 },
    { $set: { firstName: "James", codeName: "007" } }
  );

  console.log("Updated", await persons.find({ firstname: "James"}).toArray());


  await client.close();
}

run();
