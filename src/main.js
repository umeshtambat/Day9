import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  //Executing the query
  const db = client.db("mydb");
  const messageColl = db.collection("message");
  await messageColl.insertOne({});

  //closing connection
  await client.close();
  console.log("Record Added");
}

main();
