const express = require('express');
var cors = require('cors')
var app = express()

app.use(cors())
const port = 3000;

app.use(express.static("public"))

const data = [];

app.get('/:num1/:num2/:operation', (req, res) => {
  if(req.params.operation == "+") {
    res.send((parseInt(req.params.num1, 10) + parseInt(req.params.num2, 10)).toString());
    data.push(`${req.params.num1}+${req.params.num2}= ${parseInt(req.params.num1, 10) + parseInt(req.params.num2, 10)}`);
  }
  else if(req.params.operation == "-") {
    res.send((parseInt(req.params.num1, 10) - parseInt(req.params.num2, 10)).toString());
    data.push(`${req.params.num1}-${req.params.num2}= ${parseInt(req.params.num1, 10) - parseInt(req.params.num2, 10)}`);
  }
  else if(req.params.operation == "*") {
    res.send((parseInt(req.params.num1, 10) * parseInt(req.params.num2, 10)).toString());
    data.push(`${req.params.num1}*${req.params.num2}= ${parseInt(req.params.num1, 10) * parseInt(req.params.num2, 10)}`);
  }
  else if(req.params.operation == "d") {
    res.send((parseInt(req.params.num1, 10) / parseInt(req.params.num2, 10)).toString());
    data.push(`${req.params.num1}/${req.params.num2}= ${parseInt(req.params.num1, 10) / parseInt(req.params.num2, 10)}`);
  }
});

app.get('/history', (req, res) => {
  res.send(JSON.stringify(data));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});