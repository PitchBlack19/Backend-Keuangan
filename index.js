const express = require('express')
const cors = require('cors')
const app = express()
const port =82;
app.use(express.json());
app.use(cors())

let postData = []

app.get('/getdata', (req, res) => {
  res.send({postData});
});

app.get('/sensor3', (req, res) => {
  res.send({sensor3 : '200'});
});

app.post('/sensorpost', (req, res) => {
    const keuangan = {
        Pemasukan:req.body.Pemasukan,
        Pengeluaran:req.body.Pengeluaran
    };
    postData.push(keuangan);
    res.send(keuangan);
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://127.0.0.1:${port}`)
});