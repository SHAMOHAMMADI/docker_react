const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "foo",
  database: "newbase",
});

db.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});

app.get("/products", (req, res) => {
  const q = "select * from products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// app.post("/products", (req, res) => {
//   const { id, title, price, des, image, rating } = req.body;
//   const q =
//     "insert into products ( title , price , des , image , rating) values (sensor,200,sdfdgsrdg,image,6)";
//     db.query(q,(err , data )=>{
//         if(err) throw err
//         return res.json(data)
//     })
// });

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
