import { merge } from 'lodash';
import userResolver from './userResolver';
import roleResolver from './roleResolver';
import permissionResolver from './permissionResolver';

const resolvers = merge(userResolver, roleResolver, permissionResolver);

export default resolvers;
