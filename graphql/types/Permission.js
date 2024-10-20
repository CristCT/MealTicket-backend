import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const PermissionType = new GraphQLObjectType({
  name: 'Permission',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
  }),
});

export default PermissionType;
