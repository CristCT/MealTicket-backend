import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import PermissionType from './Permission';

const RolType = new GraphQLObjectType({
  name: 'Rol',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    permissions: { type: new GraphQLList(PermissionType) },
  }),
});

export default RolType;
