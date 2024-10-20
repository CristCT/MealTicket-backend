import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Permission',
    },
  ],
});

const Role = mongoose.model('Role', roleSchema);

export default Role;
