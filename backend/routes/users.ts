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

UsersRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).send({ message: 'Something went wrong' });
    }
    if (!user) {
      return res.status(401).send({ message: info.message });
    }
    return res.status(200).send({ message: 'Logged in', email: user.email });
  })(req, res, next);
});

//get current user
UsersRouter.get('/current', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).send({ email: req.user });
  }
});

//logout
UsersRouter.get('/logout', (req, res) => {
  req.logout();
  res.status(200).send('Logged out');
});
