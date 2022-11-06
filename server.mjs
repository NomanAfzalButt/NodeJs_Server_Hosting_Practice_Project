import express from 'express'
const app = express()
const port = process.env.port || 3000;

app.get('/L', (req, res) => {
  console.log(`${req.ip} is asking for L`);
  res.send('Here is your Drink')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})