// const multiply = (a, b) => a * b;

// let n = multiply(5, 8);

// console.log(n)
//  const fs = require('fs'); 
//  console.log(typeof fs)


//  fs.writeFileSync('./hello.txt', 'Hello!', function() {
//      console.log('done creating file');
//  });


// const daysOfWeek = require('./days-of-week');
 
// const day = daysOfWeek.getWeekday(5);
// console.log(day);
// console.log(daysOfWeek.getWeekday);

const random = require('./random');
for (let i = 0; i < 10; i++) {
  console.log(random(100, 200) );
}


const circle = require('./circle');
console.log( circle.area(50) );  
console.log( circle.circumference(75) ); 