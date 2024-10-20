import Permiso from '../../models/Permission';
import PermisoType from '../types/Permission';
import { GraphQLID, GraphQLString } from 'graphql';

const permissionResolver = {
  Query: {
    permission: {
      type: PermisoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Permiso.findById(args.id);
      },
    },
  },
  Mutation: {
    crearPermiso: {
      type: PermisoType,
      args: {
        nombre: { type: GraphQLString },
        descripcion: { type: GraphQLString },
      },
      resolve(parent, args) {
        const nuevoPermiso = new Permiso({
          nombre: args.nombre,
          descripcion: args.descripcion,
        });

        return nuevoPermiso.save();
      },
    },
  },
};

export default permissionResolver;
