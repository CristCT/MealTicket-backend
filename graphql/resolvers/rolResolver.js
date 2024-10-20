import Rol from '../../models/Rol';
import RolType from '../types/Rol';
import { GraphQLID, GraphQLString } from 'graphql';

const rolResolver = {
  Query: {
    rol: {
      type: RolType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Rol.findById(args.id).populate('permisos');
      },
    },
  },
  Mutation: {
    crearRol: {
      type: RolType,
      args: {
        nombre: { type: GraphQLString },
      },
      resolve(parent, args) {
        const nuevoRol = new Rol({ nombre: args.nombre });
        return nuevoRol.save();
      },
    },
  },
};

export default rolResolver;
