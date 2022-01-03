import { Schema, model, SchemaTypes } from 'mongoose';
import { ObjectId } from 'bson';

export interface IUserAuth {
  _id?: ObjectId;
  email: string;
  password: string;
  RegisteredAt: Date;
}

const userSchema = new Schema<IUserAuth>({
  _id: { type: Schema.Types.ObjectId },
  email: { type: String, required: true },
  password: { type: String, required: true },
  RegisteredAt: { type: Date, required: true },
});

export const UserAuthModel = model<IUserAuth>('usersAuth', userSchema);
