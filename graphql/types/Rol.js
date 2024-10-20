import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import PermisoType from './Permiso';

const RolType = new GraphQLObjectType({
  name: 'Rol',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    permisos: { type: new GraphQLList(PermisoType) },
  }),
});

export default RolType;
