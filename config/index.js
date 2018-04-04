//l链接mlab
const lab = {
	dburl : 'mongodb://admin:123456@ds233739.mlab.com:33739/mydb'
}
//链接本地
const dev = {
	dburl : 'mongodb://127.0.0.1:12345/'
}
module.exports = {
   lab,
   dev
}