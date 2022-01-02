const express = require('express'); //npm install express
//const fileUpload = require('express-fileupload')
const { ObjectId } = require("mongoose");
const app = express();  
const port = process.env.PORT || 4000;
const cors = require('cors'); //npm i cors

require('./database'); // npm i mongoose 
const Busqueda = require('./model/busqueda');

const router = express.Router();

//app.use(fileUpload())
app.use(cors()); 
app.use(express.json());


router.get('/', async (req, res) => {
    let busquedas = await Busqueda.find();
    res.json(busquedas);
});

app.post('/', async (req, res) => {
    for (const longitud of req.body){
      const {REGION,CIUDAD,IATA,COMUNA } = longitud;
      const busqueda = new Busqueda({REGION,CIUDAD,IATA,COMUNA});
      console.log(busqueda);
      await busqueda.save(); 
      res.json({ msg: "agregados los datos " });
    }
    
}); 

/* app.delete('/book/:id', async (req, res) => {
   const { id } = req.params;
   await Book.deleteOne({ _id: id });
   res.json({ msg:'libro eliminado' });
});
*/
router.get('/busqueda/:texto', async (req, res) => {
    const { texto } = req.params; 
    let busqueda = await Busqueda.find({CIUDAD: new RegExp('^'+texto+'$', "i")});
    res.json( busqueda );
});
/*
app.get('/book/obtener/:id', async (req, res) => {
    const { id } = req.params; 
    let books = await Book.findOne({ _id: id });
    res.json( books );
});
*/
router.put('/busqueda', async (req, res) => {
  const {id, nombre, edicion } = req.body;
  await Busqueda.updateOne({_id:id}, {$set:{nombre, edicion}});
  res.json({ msg: "busqueda actualizada"});
});
app.use(router);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});