import { Strategy as LocalStrategy } from 'passport-local';
import { getUserByEmail, getUserById } from '../userAuths/findUser';

import bcrypt = require('bcrypt');
import passport = require('passport');
import { IUser, UserAuthModel, UserModel } from '../models/userModel';

const authenticateUser = async (email: string, password: string, done: any) => {
  const user = await getUserByEmail(email);
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Password incorrect' });
    }
  } else {
    return done(null, false, { message: 'User not found' });
  }
};

export function initializePassport() {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      authenticateUser
    )
  );
  type User = {
    _id?: string; //Jank af, typescript definitions for passport.js are weird so have to override them.
  };

  passport.serializeUser((user: User, done) => {
    return done(null, user);
  });

  passport.deserializeUser(async (user: User, done) => {
    let userAuth = await UserAuthModel.findById(user._id);
    let userData = await UserModel.findOne({ AuthId: user._id });
    let userObject = userData?.toObject() as IUser;
    return done(null, {
      email: userAuth?.toObject().email,
      userInfo: {
        FirstName: userObject.FirstName,
        LastName: userObject.LastName,
        BirthDate: userObject.BirthDate,
        ProfilePictureURL: userObject.ProfilePictureURL,
      },
    });
  });

  return passport;
}
