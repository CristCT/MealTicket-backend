import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const permissionSchema = new Schema({
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

const Permiso = mongoose.model('Permiso', permissionSchema);

export default Permiso;
