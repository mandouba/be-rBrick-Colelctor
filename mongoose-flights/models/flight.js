const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  content: String,
  destination: {type: String, airport: String, },
  departs: Date, return: Date
}, {
  timestamps: true
});

const flightSchema = new Schema({
airline: {
  type: String,
  required: true
},
airport: { 
  type: String,
  required: true
},
flightNo: {
  type: Number,
  required: true
},
departs: {
  type: Date,
  required: true,
},
return: {
  type: Date,
  required: true
}
}, {
timestamps: true,

});

  // Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);

//   deleteOne
// };

// function deleteOne(id) {
//   // All properties attached to req.params are strings!
//   id = parseInt(id);
//   // Find the index based on the id of the todo object
//   const idx = flights.findIndex(flight => flight.id === id);
//   flights.splice(idx, 1);
// }
