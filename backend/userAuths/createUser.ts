import {
  IUser,
  IUserAuth,
  UserAuthModel,
  UserModel,
} from '../models/userModel';

type createUserResponse = { code: number; message: string };

export async function createUser(
  AuthInfo: IUserAuth,
  UserInfo: IUser
): Promise<createUserResponse> {
  let response: createUserResponse = {
    code: 500,
    message: 'Internal server error',
  }; //default message
  const userAuth = new UserAuthModel(AuthInfo);
  const user = new UserModel(UserInfo);
  user.AuthId = userAuth._id;

  // Save user to db
  await userAuth
    .save()
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .then((userAuth) => {
      if (userAuth) {
        response = { code: 200, message: 'User created' };
      }
    });
  await user
    .save()
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .then((user) => {
      if (user) {
        response = { code: 200, message: 'User created' };
      }
    });
  return response;
}
