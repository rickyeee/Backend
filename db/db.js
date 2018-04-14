/**
 * 测试用文件 可删除
 * @author ricky 2018-4-6 00:51:26
 */


const path = require('path')
const mongoose = require('mongoose') //引入mongo客户端对象
const config = require('../config/index.js')
const env = process.env.NODE_ENV
// console.log(config)
// console.log(config[env].dburl)
// const dbop = require('./classes/dbclass.js').DBopreation //数据库操作类

const DBURL = env ? config[env].dburl :
    config.dev.dburl
console.log('db is connecting to', DBURL)
mongoose.connect(DBURL)
const db = mongoose.connection;

const vehicleSchema = new mongoose.Schema({
    name: String,
    id: Number,
    type: String
});

vehicleSchema.methods.getName = function () {
    console.log(this.name)

}

const Vehicle = db.model('vehicle', vehicleSchema);
const X1 = new Vehicle({
    name: 'bmw-x1',
    id: 99,
    type: 'suv'
})
console.log(X1.name)
X1.getName()
X1.save(function (err, gtr) {
    if (err) return console.log(err);
    gtr.getName()
})

Vehicle.find({ name: /^bmw/ }, function (err, car) {
    if (err) return console.error(err);
    console.log(car);
})

// Vehicle.remove({ name: /^bmw/ }, function (err, car) {
//     if (err) return console.error(err);
//     console.log(car);
// })

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // console.log(s)
    console.log('connected')
 
    // we're connected!
});
//使用客户端连接数据，并指定完成时的回调方法
// mongo.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     //获取数据库对象
//     let dbobj = db.db('admin')
//     const data = [{"name":'rose',"age":21},{"name":'mark',"age":22}]
//     //执行插入数据操作，调用自定义方法
//     dbop.insertData(dbobj, data, function(result) {
//         //显示结果
//         console.log(result);
//         //关闭数据库
//         db.close();
//     });
// });