import bcrypt = require('bcrypt');
import passport = require('passport');

import { Router } from 'express';
import { UserAuthModel, UserModel } from '../models/userModel';
import { getUserByEmail } from '../userAuths/findUser';
import { createUser } from '../userAuths/createUser';
import { updateUserProfile } from '../userAuths/updateUser';

export const UsersRouter = Router();

UsersRouter.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  let userAuth = new UserAuthModel({
    email: req.body.email,
    password: hashedPassword,
    // salt: salt, //bcrypt already handles this
    RegisteredAt: new Date(),
  });

  let user = new UserModel({
    UserName: (req.body.firstName + req.body.lastName).toLowerCase(),
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    About: '',
  });

  // Check if user already exists
  if (await getUserByEmail(userAuth.email)) {
    res.status(409).send('User already exists'); // 409 IS the correct response code for conflict, but it could be a security issue for bruteforce attacks.
  } else {
    let rspns = await createUser(userAuth, user);
    if (rspns.code === 200) {
      req.logIn(userAuth, (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log(req.user);

        res.redirect('/users/current');
      });
    }
  }
});

type User = {
  // Jank af, typescript definitions for passport.js are weird so have to override them.
  email: string;
  userInfo: any;
};

UsersRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).send({ message: 'Something went wrong' });
    }
    if (!user) {
      return res.status(401).send({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).send({ message: 'Something went wrong' });
      }
    });
    res.redirect('/users/current');
  })(req, res, next);
});

//get current user
UsersRouter.get('/current', (req, res) => {
  let user: User = req.user as User;
  if (req.isAuthenticated()) {
    res.status(200).send({ email: user.email, user: user.userInfo });
  } else {
    res.status(403).send({ message: 'Not logged in' });
  }
});

//logout
UsersRouter.post('/logout', (req, res) => {
  req.logout();
  res.status(200).send('Logged out');
});

UsersRouter.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).send(req.user);
  } else {
    res.status(403).send({ message: 'Not logged in' });
  }
});

//updateProfile
UsersRouter.post('/updateProfile', async (req, res) => {
  let currUser: User = req.user as User;

  let user = new UserModel({
    UserName: req.body.userName.toLowerCase(),
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    About: req.body.about,
    // ProfilePictureURL: req.body.profilePictureURL,
  });

  let response = await updateUserProfile(user, currUser.email);

  if (response.code === 200) {
    res.status(200).send({ message: 'User updated' });
  } else {
    res.status(response.code).send({ message: response.message });
  }
});
