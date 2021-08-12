const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Coming soon!!')
})

app.get('/demo', (req, res) => {
  res.set('X-customHeader','amazingneighbor.com');
  res.status(418);
  res.send('Renting saves you money!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
