import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  description: { type: String, required: true },
  code:{ type: Number, required: true },
  price:{ type: Number, required: true },
  status:{ type: String, required: true },
  stock:{ type: Number, required: true },
  categoty:{ type: String, required: true },
  thumbnail:{ type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);

