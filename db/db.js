var mongo = require('mongodb').MongoClient //引入mongo客户端对象
var DB_CONN_STR = 'mongodb://localhost:12345/myproject'  //创建数据库连接

const interface = {
    url: DB_CONN_STR
}
/**
 * @private instance
 */
var instance = null

/**
 * @public MyprojectDB
 */
class MyprojectDB {
    
    constructor( option ){
        option
            ? null
            : option = {}
        this.connect_url = option.url
    }

    insertData(){
        console.log('-------this is insert function----------')
        console.log(`--------this.connect_url----------`)
    }
}

if( !instance ){
    instance = new MyprojectDB()
}

module.exports = {
    MyprojectDB: instance
}
// var subdb = new MyprojectDB( interface )
// subdb.insertData()