const express = require('express');

const app = express();

const port = process.env.PORT || 3000

app.get('/', (req,res) => {
  const HtmlResponse = 'PROBANDO BACKEND EN VERCEL'
  res.send(HtmlResponse)
  
})

app.listen(port, () => {
  console.log('CONECTADO AL PUERTO 3000')
})