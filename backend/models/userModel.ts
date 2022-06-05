import { Schema, model, SchemaTypes } from 'mongoose';
import { ObjectId } from 'bson';

export interface IUserAuth {
  _id?: ObjectId;
  email: string;
  password: string;
  RegisteredAt: Date;
}

export interface IUser {
  _id?: ObjectId;
  UserName: string;
  FirstName: string;
  LastName: string;
  About: string;
  BirthDate: Date;
  ProfilePictureURL: string;
  AuthId: ObjectId;
}

const userAuthSchema = new Schema<IUserAuth>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  RegisteredAt: { type: Date, required: true },
});

const UserSchema = new Schema<IUser>({
  UserName: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  About: { type: String },
  BirthDate: { type: Date },
  ProfilePictureURL: { type: String },
  AuthId: { type: SchemaTypes.ObjectId, required: true },
});

export const UserAuthModel = model<IUserAuth>('usersAuth', userAuthSchema);

export const UserModel = model<IUser>('users', UserSchema);
