const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql");
var morgan = require("morgan");
const helmet = require("helmet");
// const apiRoutes = require("./routes/apiRoutes");

var connection = mysql.createConnection({
  host: "localhost",
  // db port
  port: 3306,
  user: "root",
  password: "password",
  database: "ecom_data"
});

// Define middleware here
app.use(helmet());

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Use apiRoutes
// // app.use("/api", apiRoutes);
// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("/product", (req, res) => {
  connection.query(
    "SELECT Product.*, Price.amount FROM Product LEFT JOIN Price ON (Product.Price_id = Price.id)",
    function(err, data) {
      res.send(data);
      //   console.log(data);
    }
  );
});
app.get("/contact", (req, res) => {
  connection.query("SELECT * FROM Contact", function(err, data) {
    res.send(data);
    console.log(data);
  });
});

app.get("/product/:query", (req, res) => {
  let item = req.params.query;
  connection.query("SELECT * FROM Product WHERE id = ?", [item], function(
    err,
    data
  ) {
    res.json(data);
    console.log(data);
  });
});

// app.get("/api/productinvoice/:query", (req, res) => {
//     connection.query("SELECT * FROM Contact", function(err, data) {
//       res.send(data);
//       console.log(data);
//     });
//   });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
