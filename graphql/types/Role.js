import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import PermissionType from './Permission.js';

const RoleType = new GraphQLObjectType({
  name: 'Role',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    permissions: { type: new GraphQLList(PermissionType) },
  }),
});

export default RoleType;
