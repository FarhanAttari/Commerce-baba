const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    images:[String],
    cost: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    skuID: { type: String, unique: true },
    operationWeight: Number,
    newSeller: { type: Boolean, default: false },
    storeId: { type: Schema.Types.ObjectId, ref: "Store" },
    promotionTags: [String],
    description: String,
    approved: { type: Boolean, default: false },
    salePrice: Number,
    originalNumber: Number,
    discount: Number,
    inWishList: { type: Boolean, default: false },
    warranties: [{
      description: {
        type: String
      }
    }],
    quantity: {
      type:Number,
      max: 3,
      min: 1
    },
    attributes: mongoose.Schema.Types.Mixed,
  },{ discriminatorKey: 'category', collection: 'products' });

  let Product = mongoose.model("Product", productSchema);
  const grocerySchema = new mongoose.Schema(
    {
      expiryDate: Date,
      weight: String,
      nutritionInformation: String,
    },
    { discriminatorKey: 'category', collection: 'products' }
  );
  
  const electronicSchema = new mongoose.Schema(
    {
      type: String,
      manufacturer: String,
      warrantyPeriod: String,
      technicalSpecifications: String,
    },
    { discriminatorKey: 'category', collection: 'products' }
  );
  
  const clothingSchema = new mongoose.Schema(
    {
      gender: String,
      size: String,
      color: String,
    },
    { discriminatorKey: 'category', collection: 'products' }
  );
  
  // Define models based on the specific schemas
  const Grocery = Product.discriminator('Grocery', grocerySchema);
  const Electronic = Product.discriminator('Electronic', electronicSchema);
  const Clothing = Product.discriminator('Clothing', clothingSchema);
  
  module.exports = { Product, Grocery, Electronic, Clothing };
  
 
