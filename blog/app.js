const express = require('express');
const mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const util = require('util');
const {config,Database} = require('./database');

const readFilePromise = util.promisify(fs.readFile);
const app = express();
app.use('/views/static',express.static(__dirname + '/views/static'));

app.get('/', (req,res) => {
  const indexPath = path.join(__dirname,'views','index.html');
  
  readFilePromise(indexPath,'utf8').then(data=>res.send(data)); 
  
})

app.get('/login', (req,res) => {
  const loginPath = path.join(__dirname,'views','login.html');

  readFilePromise(loginPath,'utf8').then(data=>res.send(data)); 
  
 
  })
app.get('/user',(req,res) => {
  
  const db = new Database(config);
  const sql = 'select * from product';
  db.execData(sql).then(data => {
    res.send(data);
  }) 
})
app.get('/addUser',(req,res) => {
  const db = new Database(config);
  const sql = 'INSERT INTO product SET ?' ;
  const params = {"pname":"冰绿茶","price":3.5,"pmount":25,"desc":"冰力十足"};
  db.execData(sql,params).then(data => {
    res.send(data);
  })
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})