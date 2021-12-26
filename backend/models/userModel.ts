import { Schema, model, connect } from 'mongoose';

export interface IUser {
  username: string;
  fullname: string;
  age: number;
  entrydate?: Date;
}

const userSchema = new Schema<IUser>({
  // _id
  username: { type: String, required: true },
  fullname: { type: String, required: true },
  age: { type: Number, required: true },
  entrydate: { type: Date, default: Date.now },
});

export const User = model<IUser>('users', userSchema);
