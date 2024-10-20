import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const usuarioSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
