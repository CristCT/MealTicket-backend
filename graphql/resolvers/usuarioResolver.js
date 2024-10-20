import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../../models/Usuario';
import UsuarioType from '../types/Usuario';
import { GraphQLString, GraphQLID } from 'graphql';

const usuarioResolver = {
  Query: {
    usuario: {
      type: UsuarioType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Usuario.findById(args.id).populate('roles');
      },
    },
  },
  Mutation: {
    registrarUsuario: {
      type: UsuarioType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        if (!args.username || !args.email || !args.password) {
          throw new Error(
            'Todos los campos son obligatorios: username, email, y password'
          );
        }

        const usuarioExistente = await Usuario.findOne({ email: args.email });
        if (usuarioExistente) {
          throw new Error('El correo ya está registrado');
        }

        const hashedPassword = await bcrypt.hash(args.password, 10);
        const nuevoUsuario = new Usuario({
          username: args.username,
          email: args.email,
          password: hashedPassword,
        });

        return nuevoUsuario.save();
      },
    },
    loginUsuario: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const usuario = await Usuario.findOne({ email: args.email });
        if (!usuario) {
          throw new Error('Usuario no encontrado');
        }

        const esValido = await bcrypt.compare(args.password, usuario.password);
        if (!esValido) {
          throw new Error('Contraseña incorrecta');
        }

        const token = jwt.sign(
          { id: usuario._id, email: usuario.email },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h',
          }
        );

        return token;
      },
    },
  },
};

export default usuarioResolver;
