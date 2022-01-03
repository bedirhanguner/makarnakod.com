import bcrypt = require('bcrypt');
import passport = require('passport');

import { Router } from 'express';
import { UserAuthModel } from '../models/userModel';
import { getUserByEmail } from '../userAuths/findUser';

export const UsersRouter = Router();

UsersRouter.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  let user = new UserAuthModel({
    email: req.body.email,
    password: hashedPassword,
    // salt: salt, //bcrypt already handles this
    RegisteredAt: new Date(),
  });

  // Check if user already exists
  if (await getUserByEmail(user.email)) {
    res.status(409).send('User already exists'); // 409 IS the correct response code for conflict, but it could be a security issue for bruteforce attacks.
  } else {
    user.save((err, data) => {
      // save user to db
      if (err) throw err;
      if (data) {
        res.status(200).send('User created');
      } else {
        res.status(500).send('Something went wrong');
      }
    });
  }
});

UsersRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: 'http://localhost:3000/giris-yap',
    failureFlash: false,
  })
);
