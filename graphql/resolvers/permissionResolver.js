import Permission from '../../models/Permission.js';
import PermissionType from '../types/Permission.js';
import { GraphQLID, GraphQLString } from 'graphql';

const permissionResolver = {
  Query: {
    permission: {
      type: PermissionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Permission.findById(args.id);
      },
    },
  },
  Mutation: {
    createPermission: {
      type: PermissionType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newPermission = new Permission({
          name: args.name,
          description: args.description,
        });

        return newPermission.save();
      },
    },
  },
};

export default permissionResolver;
