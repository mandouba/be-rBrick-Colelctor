// function random(min,max) {

//     return Math.floor(Math.random() * (max - min + 1)  + min);
//  }

//  module.exports = {
//      random: random
//  }

// another way to do it 
 module.exports = function(min, max) {  

    return Math.floor(Math.random() * (max - min + 1)  + min);

 }