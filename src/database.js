const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://cvasquez:camila1993@busqueda.y4qdp.mongodb.net/base?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('conectado a la db'))
