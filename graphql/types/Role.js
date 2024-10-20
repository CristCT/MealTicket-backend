import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import PermissionType from './Permission';

const RoleType = new GraphQLObjectType({
  name: 'Role',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    permissions: { type: new GraphQLList(PermissionType) },
  }),
});

export default RoleType;
