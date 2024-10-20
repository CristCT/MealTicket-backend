import { merge } from 'lodash';
import usuarioResolver from './usuarioResolver';
import rolResolver from './rolResolver';
import permissionResolver from './permissionResolver';

const resolvers = merge(usuarioResolver, rolResolver, permissionResolver);

export default resolvers;
