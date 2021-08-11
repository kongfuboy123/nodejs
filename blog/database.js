const mysql = require('mysql');
const config = {
  host: 'localhost',
  database:'productdb', 
  user: 'root', 
  password: 'root' 
};
class Database {
  constructor(config){
    this.config = config;
    this.conn = mysql.createConnection(this.config);
    this.conn.connect(err => {
      if (err) {
        console.log('连接失败');
      }else {
        console.log('连接成功');
      }
    });
  }
  execData(sql,params={}){
    return new Promise((resolve,reject)=>{
      this.conn.query(sql, params,(err,results)=>{
        if (err) {
          reject(err); 
        } else {
          resolve(results); 
        }
      })
    })
  }

}
module.exports = {config,Database};

const db = new Database(config);
const sql = 'select * from product';
