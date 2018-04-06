const mongoose = require('mongoose')
const vehicleSchema = new mongoose.Schema({
    name: String,
    id: Number,
    type: String
})
vehicleSchema.methods.getName = function () {
    console.log(this.name)
}
console.log('第一次引用','----vehicle.js-----')//测试多次引用是否会缓存
module.exports = mongoose.model('vehicle', vehicleSchema);