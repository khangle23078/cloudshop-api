const { MongoClient } = require('mongodb');

const URI = "mongodb+srv://linhdong9x99:khang123@cluster0.xfwbmsk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(URI);
async function connectDb() {
   try {
      await client.connect();
      console.log("Connected correctly to server");
   } catch (err) {
      console.log(err.stack);
   }
   finally {
      await client.close();
   }
}

module.exports = connectDb