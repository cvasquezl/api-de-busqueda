"use strict";

const express = require('express'); //npm install express
//const fileUpload = require('express-fileupload')


const {
  ObjectId
} = require("mongoose");

const app = express();
const port = process.env.PORT || 4000;

const cors = require('cors'); //npm i cors


require('./database'); // npm i mongoose 


const Busqueda = require('./model/busqueda');

const router = express.Router(); //app.use(fileUpload())

app.use(cors());
app.use(express.json());
router.get('/', async (req, res) => {
  let busquedas = await Busqueda.find();
  res.json(busquedas);
});
/* app.post('/busqueda', async (req, res) => {
    const {nombre, edicion } = req.body;
    const book = new Book({ nombre, edicion });
    await book.save(); 
    res.json({ msg: "libro agregado" });
}); */

/* app.delete('/book/:id', async (req, res) => {
   const { id } = req.params;
   await Book.deleteOne({ _id: id });
   res.json({ msg:'libro eliminado' });
});

app.get('/book/:texto', async (req, res) => {
    const { texto } = req.params; 
    let books = await Book.find({nombre: new RegExp('^'+texto+'$', "i")});
    res.json( books );
});

app.get('/book/obtener/:id', async (req, res) => {
    const { id } = req.params; 
    let books = await Book.findOne({ _id: id });
    res.json( books );
});

app.put('/book', async (req, res) => {
  const {id, nombre, edicion } = req.body;
  await Book.updateOne({_id:id}, {$set:{nombre, edicion}});
  res.json({ msg: "libro actualizado"});
}); */

app.use('/busqueda',router);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});