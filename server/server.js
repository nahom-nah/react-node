const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!  Shutting down...");
  console.log(err.name, err.message);
  console.log(err);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.DATABASE;
  
mongoose.connect(DB, { }).then(() => console.log("DB connection successful!")).catch((err)=>{

console.log(`something wrong with the connectino ${err}`)
 
});
  
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

  

process.on("SIGTERM", () => {
  console.log(" SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log(" Process terminated!");
  });
});
