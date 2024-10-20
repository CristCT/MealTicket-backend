import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import RoleType from './Role';

const UserType = new GraphQLObjectType({
  name: 'Usuario',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    roles: { type: new GraphQLList(RoleType) },
  }),
});

export default UserType;
