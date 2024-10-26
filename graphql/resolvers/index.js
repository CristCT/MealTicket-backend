import _ from 'lodash';
import userResolver from './userResolver.js';
import roleResolver from './roleResolver.js';
import permissionResolver from './permissionResolver.js';
import voucherResolver from './voucherResolver.js';

const { merge } = _;

const resolvers = merge(userResolver, roleResolver, permissionResolver, voucherResolver);

export default resolvers;
