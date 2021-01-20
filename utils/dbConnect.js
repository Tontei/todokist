const mongoose = require("mongoose");

async function dbConnect() {

  await mongoose.connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


}
export default dbConnect;