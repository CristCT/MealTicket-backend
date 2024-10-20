import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import resolvers from '../resolvers.js';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...resolvers.Query,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...resolvers.Mutation,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

export default schema;
