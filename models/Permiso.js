import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const permisoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: false,
  },
});

const Permiso = mongoose.model('Permiso', permisoSchema);

export default Permiso;
