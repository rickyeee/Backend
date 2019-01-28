/**
 * 连接数据库
 * @author ricky 2018-4-6 00:52:27
 */

const path = require('path')
const mongoose = require('mongoose') //引入mongo客户端对象
const config = require('../config')
const env = process.env.NODE_ENV
// const fs  = require('fs') 
const DBURL = env ? config[env].dburl :
    config.dev.dburl

console.log('----------server is running in---------', env)
console.log('----------db is connecting to---------', DBURL)

//连接数据库
mongoose.connect(DBURL, { useNewUrlParser: true })
//获取连接
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db connected')
});

/**
 * 循环配置exports
 */
// let models = {};
// const files = fs.readdirSync(path.resolve(__dirname, './models'))

// files.forEach(function(model, index){
//     const name = file.substring(0,file.lastIndexOf("."));
//     models[name] = require('./models/' + file);
// })

module.exports = {
    Vehicle: require('./models/vehicle.js')
}