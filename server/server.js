const express = require("express");
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root", //mysql의 id
  password: "hoya0517", //mysql의 password
  database: "ourlegacy", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("혁이는 코딩 중!");
// });

// app.get("/mens/:id", (req, res) => {
//   console.log(req.body);
//   const a = {
//     bb: "bb",
//   };
//   res.send(a);
// });

app.get("/mens", (req, res) => {
  console.log("안녕");
  console.log(req);
  const test = req.body.plzid;
  console.log("굿굿");
  console.log(req.body);
  console.log("테스트");
  console.log(test);
  connection.query("SELECT * FROM mens", function (err, rows, fields) {
    if (err) {
      console.log("데이터 가져오기 실패");
    } else {
      console.log("바이바이");
      console.log(rows[0]);
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});
