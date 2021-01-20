import dbConnect from "../../utils/dbConnect";
import User from "../../Models/models";

export default (req, res) => {
  const key = "General";
  dbConnect();
  if (req.method == "GET") {
    // Look for the user with that key address
    User.findOne({ key: key }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        if (doc) {
          // If there is a user with the key address, send the todo list items
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ items: doc.items });
        } else {
          // If there isn't a user with that key address, create one
          User.create({
            key: key,
            items: [],
          });
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ items: [] });
        }
      }
    });
  } else if (req.method == "POST") {
    //   Get the new item from the request
    const parsedRequest = JSON.parse(req.body);
    const newItem = parsedRequest.newItem;
    //   Look for user with specified key address
    User.findOne({ key: key }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        if (doc) {
          doc.items.push(newItem);
          doc.save();
          res.statusCode = 200;
          res.json({ sucess: "post was successful" });
        } else {
          res.statusCode = 400;
          res.json({ Error: "User not found" });
        }
      }
    });
  } else if (req.method == "DELETE") {
    let { content } = JSON.parse(req.body);

    //   Find the user in the database
    User.findOne({ key: key }, (err, doc) => {
      if (err) console.log(err);
      else {
        if (doc) {
          let newItems = doc.items.filter((element) => {
            return element != content;
          });
          doc.items = newItems;
          doc.save();
          res.statusCode = 200;
          res.json({ Success: "Deletion complete" });
        } else {
          res.statusCode = 400;
          res.json({ Error: "user not found" });
        }
      }
    });
  } else {
    res.status(400)
    res.json({ Error: "bad request" });
  }
};
