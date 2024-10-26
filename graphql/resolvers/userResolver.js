import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import UserType from '../types/User.js';
import { GraphQLString, GraphQLList, GraphQLID } from 'graphql';

const userResolver = {
  Query: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id).populate('roles');
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find().populate('roles');
      },
    },
  },
  Mutation: {
    registerUser: {
      type: UserType,
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

        const UserExistente = await User.findOne({ email: args.email });
        if (UserExistente) {
          throw new Error('El correo ya está registrado');
        }

        const hashedPassword = await bcrypt.hash(args.password, 10);
        const newUser = new User({
          username: args.username,
          email: args.email,
          password: hashedPassword,
        });

        return newUser.save();
      },
    },
    loginUser: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const user = await User.findOne({ email: args.email });
        if (!user) {
          throw new Error('Usuario no encontrado');
        }

        const isValid = await bcrypt.compare(args.password, user.password);
        if (!isValid) {
          throw new Error('Contraseña incorrecta');
        }

        const token = jwt.sign(
          { id: user._id, email: user.email },
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

export default userResolver;
