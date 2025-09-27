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

  console.log("Return All Documents")
  console.log(await persons.find().toArray()); 

  console.log("USA Only")
  console.log(await persons.find({ country: "USA" }).toArray());

  console.log("Selected Fields")
  console.log(await persons.find({}, { projection: { _id: 0, firstname: 1, lastname: 1 } }).toArray());

  console.log("Lastname Ascending Order")
  console.log(await persons.find().sort({ lastname: 1 }).toArray()); 

  console.log("Bron >= 1950")
  console.log(await persons.find({ year: { $gte: 1950 } }).toArray());

  console.log("Total Documents")
  console.log(await persons.countDocuments()); 

  const allDocs = await persons.find().toArray();
  console.log(JSON.stringify(allDocs, null, 2));

  await client.close();
}

run();
