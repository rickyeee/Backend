/**
 * created by ricky 2018-3-18 20:33:45
 */

/**
 * @private instance
 */

var dbOpreation = null 

/**
 * @public DBopreation
 */

class DBopreation {
    
    constructor( option ){
        option
            ? null
            : option = {}
        this.connect_url = option.url
    }

    /**
     * 获取集合
     * @param {*} collection 集合名称
     */

    getCollection( db, collection ){
        return db.collection( collection )
    }
    
    /**
     * 插入数据
     * @param {*} db 
     * @param {*} data 
     * @param {*} callback 
     */

    insertData(db, data, callback){
        // console.log(db, '====insertData')
        if( !db || !data || typeof callback !== 'function' ){
            console.log( ...arguments ,'---参数有误----')
            return false
        }
        let collection = this.getCollection( db, 'products' )
        collection.insert(data, function(err, res){
            if( err ) {
                console.log(err)
                return
            }
            callback(res)           
        })
    }
}

if( !dbOpreation ){
    dbOpreation = new DBopreation()
}

module.exports = {
    DBopreation: dbOpreation
}
// const interface = {
//     url: "test url"
// }
// var subdb = new MyprojectDB( interface )
// subdb.insertData()