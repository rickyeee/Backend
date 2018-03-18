const mongo = require('mongodb').MongoClient //引入mongo客户端对象
const DB_CONN_STR = 'mongodb://localhost:12345/myproject'  //创建数据库连接
const dnop = require('./classes/dbclass.js').DBopreation
//使用客户端连接数据，并指定完成时的回调方法
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    const data = [{_id:7,"name":'rose',"age":21},{_id:8,"name":'mark',"age":22}]
    //执行插入数据操作，调用自定义方法
    dnop.insertData(db, data, function(result) {
        //显示结果
        console.log(result);
        //关闭数据库
        db.close();
    });
});



































