import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';
import UserType from './User.js';

const VoucherType = new GraphQLObjectType({
  name: 'Voucher',
  fields: () => ({
    id: { type: GraphQLID },
    user: { type: UserType },
    serviceType: { type: GraphQLString },
    isUsed: { type: GraphQLBoolean },
    issuedAt: { type: GraphQLString },
    usedAt: { type: GraphQLString },
  }),
});

export default VoucherType;
