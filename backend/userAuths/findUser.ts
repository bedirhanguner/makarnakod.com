import { IUserAuth, UserAuthModel } from '../models/userModel';

export function getUserByEmail(email: string): IUserAuth | null {
  UserAuthModel.findOne({ email: email }).exec((err, data) => {
    if (err) throw err;
    if (data) {
      return data;
    } else {
      return null;
    }
  });
  throw new Error('Something went wrong');
}
