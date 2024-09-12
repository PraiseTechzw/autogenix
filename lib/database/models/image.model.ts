import { Document, Schema, model, models } from "mongoose";

// IImage interface that extends Mongoose Document
export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; 
  width?: number;
  height?: number;
  config?: object; 
  transformationUrl?: string; 
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date;
  updatedAt?: Date;
}

// Image schema
const ImageSchema = new Schema(
  {
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: String, required: true },  // Changed to secureUrl
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Author is required
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt
);

// Create or export the Image model
const Image = models?.Image || model('Image', ImageSchema);

export default Image;
