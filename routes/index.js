let express = require('express');
let router = express.Router();
let fs = require('fs')


/* GET home page. */
router.get('/', function(req, res) {
  let values = fs.readFileSync('card-detail/json/data.json')
  const jsonData = JSON.parse(values);
  console.log(jsonData);
  res.render('index', { values: jsonData })
});

router.get('/product', function(req, res) {
  let values = fs.readFileSync('card-detail/json/data.json')

    console.log(req.query.id)

    let id = req.query.id

    const jsonData = JSON.parse(values);
    console.log(jsonData[id].productPrise);
    console.log(jsonData)
    res.render('product', { values: jsonData[id] })
})

module.exports = router;
