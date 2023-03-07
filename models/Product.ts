import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var product = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  priceUK: {
    type: Number,
    required: true,
  },
  priceUS: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageMain: {
    type: String,
    required: true,
  },

  imageHover: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  productInfo: {
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: false,
    },
    image4: {
      type: String,
      required: false,
    },
    image5: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.models.Product || mongoose.model('Product', product);
