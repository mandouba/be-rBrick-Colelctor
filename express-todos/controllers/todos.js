const Todo = require ('../models/todo')


module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
  };
  
  function index(req, res) {
    res.render('/todos/index', {
      todos: Todo.getAll() 
      /// caps when we call a class we use classes to have multiple objs
    });
  } 

  function show(re, res) {
      res.render ('todos/show', {
          todo:Todo.getOne(repq.arams.id)
      })
      
  }

  function newTodo(req, res) {
      res.render('todos/new')
  }

  function create(req, res){
      console.log(req.body)
   // The model is responsible for creating data
   Todo.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/todos') // redirects always make a get request  this redircts us to the index route 
  }

  function deleteTodo( req, res){
      Todo.deleteOne(req.params.id)
      res.redirect('/todos')
  }