import { IVerifyOptions, Strategy as LocalStrategy } from 'passport-local';
import { IUserAuth } from '../models/userModel';
import { getUserByEmail } from '../userAuths/findUser';

import bcrypt = require('bcrypt');

const passport = require('passport');

type doneType = (
  error: any,
  user?: any,
  options?: IVerifyOptions | undefined
) => void;

export function initializePassport() {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      (email, password, done) => {
        let user = getUserByEmail(email);
        if (!user) {
          return done(null, false, {
            message: 'No user with the submitted email address was found',
          });
        }
        try {
          if (bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: 'Incorrect password',
            });
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user: IUserAuth, done: doneType) => {});
  passport.deserializeUser((user: IUserAuth, done: doneType) => {});

  return passport;
}
