// findStudents.js
// Galang, Marius Kevin D.
// WD - 301

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db("StudentDB");
  const students = db.collection("Students");

  const result = await students.find(
    { dept: "CS", gpa: { $gte: 3.5 } },
    { projection: { _id: 0, firstName: 1, lastName: 1, gpa: 1 } }
  ).sort({ gpa: -1 }).limit(3).toArray();

  console.log("Computer Science Students with GPA ≥ 3.5:");
  console.log(result);
}

run();
