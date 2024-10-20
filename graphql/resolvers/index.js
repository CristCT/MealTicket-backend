import { merge } from 'lodash';
import usuarioResolver from './usuarioResolver';
import roleResolver from './roleResolver';
import permissionResolver from './permissionResolver';

const resolvers = merge(usuarioResolver, roleResolver, permissionResolver);

export default resolvers;
