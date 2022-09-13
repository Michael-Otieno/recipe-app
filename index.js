const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { response } = require('express')
const fetch = require('node-fetch');


require('dotenv').config()

const app = express()

app.get('/', (req,res)=>{
  res.json('hi')
})

app.get('/list', (req,res)=>{
  const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6b04fbf685msh8d00e3cc6729138p1e5afbjsn02ffeb8dbf46',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => ('error:' + err));


})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))