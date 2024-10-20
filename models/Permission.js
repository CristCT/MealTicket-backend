import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const permissionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Permiso = mongoose.model('Permission', permissionSchema);

export default Permiso;
