const foods = [

] 

module.exports = {
    getAll,
    create,
}

function getAll() {
    return foods
}
function create(food){
    food.id = foods.length
    foods.push(food)
    console.log(food)
}