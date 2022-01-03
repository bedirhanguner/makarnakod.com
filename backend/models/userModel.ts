import { Schema, model, connect } from 'mongoose';

export interface IUserAuth {
  email: string;
  password: string;
  RegisteredAt: Date;
}

const userSchema = new Schema<IUserAuth>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  RegisteredAt: { type: Date, required: true },
});

export const UserAuthModel = model<IUserAuth>('usersAuth', userSchema);
