import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const PermisoType = new GraphQLObjectType({
  name: 'Permiso',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
  }),
});

export default PermisoType;
