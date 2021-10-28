"use strict";

const mongoose = require('mongoose');

const {
  Schema
} = mongoose; // const mongoosePaginate = require('mongoose-paginate-v2');

const busquedaSchema = new Schema({
  CIUDAD: {
    type: String,
    required: true
  },
  IATA: {
    type: String,
    required: true
  },
  REGION: {
    type: String,
    required: true
  }
}); // busquedaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('busqueda', busquedaSchema);