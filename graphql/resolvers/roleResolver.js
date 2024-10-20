import Role from '../../models/Role.js';
import RoleType from '../types/Role.js';
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
    createRole: {
      type: RoleType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newRole = new Role({ name: args.name });
        return newRole.save();
      },
    },
  },
};

export default roleResolver;
