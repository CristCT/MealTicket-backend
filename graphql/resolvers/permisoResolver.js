import Permiso from '../../models/Permiso';
import PermisoType from '../types/Permiso';
import { GraphQLID, GraphQLString } from 'graphql';

const permisoResolver = {
  Query: {
    permiso: {
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

export default permisoResolver;
