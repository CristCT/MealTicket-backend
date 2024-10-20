import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const PermissionType = new GraphQLObjectType({
  name: 'Permission',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

export default PermissionType;
