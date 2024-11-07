import mongoose, { Schema, Document } from 'mongoose';

export interface IAttachment extends Document {
  filename: string;
  url: string;
  createdAt: Date;
}

const AttachmentSchema: Schema = new Schema({
  taskId: { type: String, require: true },
  filename: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Attachment = mongoose.model<IAttachment>('Attachment', AttachmentSchema);
