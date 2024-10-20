import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import RolType from './Rol';

const UsuarioType = new GraphQLObjectType({
  name: 'Usuario',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    roles: { type: new GraphQLList(RolType) },
  }),
});

export default UsuarioType;
