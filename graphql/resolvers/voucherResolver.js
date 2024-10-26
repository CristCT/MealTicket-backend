import mongoose from 'mongoose';
import Voucher from '../../models/Voucher.js';
import VoucherType from '../types/Voucher.js';
import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

const voucherResolver = {
  Mutation: {
    createVoucher: {
      type: VoucherType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        serviceType: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, { userId, serviceType }) {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
          throw new Error('El ID de usuario no es válido');
        }
        const normalizedUserId = new mongoose.Types.ObjectId(userId);

        const newVoucher = new Voucher({
          user: normalizedUserId,
          serviceType,
        });
        await newVoucher.save();

        return newVoucher.populate('user', 'id username');
      },
    },
    useVoucher: {
      type: VoucherType,
      args: {
        voucherId: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, { voucherId }) {
        const voucher = await Voucher.findById(voucherId);
        if (!voucher || voucher.isUsed) {
          throw new Error('El vale ya ha sido utilizado o no existe');
        }
        voucher.isUsed = true;
        voucher.usedAt = new Date();
        return voucher.save();
      },
    },
  },
  Query: {
    allVouchers: {
      type: new GraphQLList(VoucherType),
      resolve() {
        return Voucher.find().populate('user');
      },
    },
    vouchersByUser: {
      type: new GraphQLList(VoucherType),
      args: { userId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, { userId }) {
        return Voucher.find({ user: userId }).populate('user');
      },
    },
    vouchersReport: {
      type: new GraphQLObjectType({
        name: 'VoucherReport',
        fields: () => ({
          total: { type: GraphQLString },
          used: { type: GraphQLString },
          unused: { type: GraphQLString },
        }),
      }),
      async resolve() {
        const total = await Voucher.countDocuments();
        const used = await Voucher.countDocuments({ isUsed: true });
        const unused = await Voucher.countDocuments({ isUsed: false });

        return { total, used, unused };
      },
    },
  },
};

export default voucherResolver;
