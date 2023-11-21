import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  products: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Cart', cartSchemaSchema);
