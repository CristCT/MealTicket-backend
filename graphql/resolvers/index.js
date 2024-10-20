import { merge } from 'lodash';
import usuarioResolver from './usuarioResolver';
import rolResolver from './rolResolver';
import permisoResolver from './permisoResolver';

const resolvers = merge(usuarioResolver, rolResolver, permisoResolver);

export default resolvers;
