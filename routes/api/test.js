var express = require('express');
var router  = express.Router();
var db = require('../../db')

// const X1 = new db.Vehicle({
//     name: 'bmw-x1',
//     id: 99,
//     type: 'suv'
// })
// console.log(X1.name)
// X1.getName()
// X1.save(function (err, gtr) {
//     if (err) return console.log(err);
//     gtr.getName()
// })

// db.Vehicle.find({ name: /^bmw/ }, function (err, car) {
//     if (err) return console.error(err);
//     console.log(car);
// })

// db.Vehicle.remove({ name: /^bmw/ }, function (err, car) {
//     if (err) return console.error(err);
//     console.log(car);
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
