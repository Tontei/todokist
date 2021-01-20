const mongoose = require("mongoose");

async function dbConnect() {

  await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


}
export default dbConnect;