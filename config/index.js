//生产环境
const prod = {
	dburl : require('./prod.env.js').dburl
}
//开发环境
const dev= {
	dburl : require('./dev.env.js').dburl
}
//测试环境
const test= {
	dburl : require('./test.env.js').dburl
}
module.exports = {
   prod
   ,dev
   ,test
}