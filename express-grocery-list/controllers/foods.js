const Food = require('../models/food')

module.exports = {
    create,
    index,

}

function create(req, res){
    console.log(req.body)
    Food.create(req.body) //
    res.redirect('/') // redirect to index
}

function index( req, res) {
    res.render('index', {
        title: 'Grocery List',
        foods: Food.getAll()
    })
}