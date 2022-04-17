const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mandouba:3020V%40nBuren@cluster0.3iwjn.mongodb.net/mandouba?retryWrites=true&w=majority');

// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
