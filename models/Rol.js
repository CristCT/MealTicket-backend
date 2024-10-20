import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const rolSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Permiso',
    },
  ],
});

const Rol = mongoose.model('Rol', rolSchema);

export default Rol;
