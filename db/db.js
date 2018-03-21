const mongo = require('mongodb').MongoClient //引入mongo客户端对象
const DB_CONN_STR = 'mongodb://localhost:12345/'  //创建数据库连接
const dbop = require('./classes/dbclass.js').DBopreation //数据库操作类
//使用客户端连接数据，并指定完成时的回调方法
mongo.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    //获取数据库对象
    let dbobj = db.db('admin')
    const data = [{"name":'rose',"age":21},{"name":'mark',"age":22}]
    //执行插入数据操作，调用自定义方法
    dbop.insertData(dbobj, data, function(result) {
        //显示结果
        console.log(result);
        //关闭数据库
        db.close();
    });
});
