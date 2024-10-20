import Role from '../../models/Role';
import RoleType from '../types/Role';
import { GraphQLID, GraphQLString } from 'graphql';

const roleResolver = {
  Query: {
    role: {
      type: RoleType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Role.findById(args.id).populate('permissions');
      },
    },
  },
  Mutation: {
    crearRole: {
      type: RoleType,
      args: {
        nombre: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newRole = new Role({ nombre: args.nombre });
        return newRole.save();
      },
    },
  },
};

export default roleResolver;
