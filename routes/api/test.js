var express = require('express');
var router  = express.Router();
var db = require('../../db')

const X1 = new db.Vehicle({
    name: 'bmw-x1',
    id: 99,
    type: 'suv'
})
X1.getName()
// X1.save(function (err, gtr) {
//     if (err) return console.log(err);
//     gtr.getName()
// })


console.log(X1.name)

// db.Vehicle.remove({ name: /^bmw/ }, function (err, car) {
//     if (err) return console.error(err);
//     console.log(car);
// })

/* GET users listing. */
router.get('/', function(req, res, next) {

    db.Vehicle.find({ name: /^bmw/ }, function (err, car) {
        if (err) return console.error(err);
        // console.log(typeof car)
        console.log(car, '-------car-------');
        res.json({code: 200, data: car || []});
    })
    
});

module.exports = router;
