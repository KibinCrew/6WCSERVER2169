// Galang, Marius Kevin D.
// WD - 301

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  console.log("✅ Connected to MongoDB");

  const db = client.db("StudentDB");
  const students = db.collection("Students");

  const result = await students.updateMany(
    { skills: "MongoDB", badge: { $exists: false } },
    { $set: { badge: "MongoDB-Foundations" } }
  );

  console.log("Documents Successfully updated.");

  const updatedDoc = await students.find({ skills: "MongoDB" }).toArray();
  console.log(updatedDoc);

}

run();
