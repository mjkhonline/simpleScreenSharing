const express = require('express')
const server = express()
const screenshot = require('screenshot-desktop')

let image = null

setInterval(()=>{
    screenshot().then((img) => {
      image = img
      //console.log('new screenshot captured.')
  }).catch((err) => {
    console.log('screenshot failed: ' + err)
  })
}, 350)

server.get('/live',(req,res)=>{
  res.type('json')
  res.set('Access-Control-Allow-Origin', '*')
  res.send({"image": image})
})

server.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
