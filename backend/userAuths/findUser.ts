import { UserAuthModel } from '../models/userModel';
import mongoose = require('mongoose');

export function getUserByEmail(email: string) {
  return UserAuthModel.findOne({ email: email });
}

export function getUserById(id: string) {
  //convert to mongoose id
  return UserAuthModel.findById(id);
}
