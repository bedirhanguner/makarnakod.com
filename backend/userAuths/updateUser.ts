import { IUser, UserAuthModel, UserModel } from '../models/userModel';

type updateUserProfileResponse = { code: number; message: string };

export async function updateUserProfile(
  UserInfo: IUser,
  UserEmail: string
): Promise<updateUserProfileResponse> {
  let response: updateUserProfileResponse = {
    code: 500,
    message: 'Internal server error',
  }; //default message
  const auth = await UserAuthModel.findOne({ email: UserEmail });
  if (auth == null) {
    response = { code: 404, message: 'User not found' };
    return response;
  }
  const user = await UserModel.findOne({ AuthId: auth._id });
  if (user == null) {
    response = { code: 404, message: 'User not found' };
    return response;
  }

  user.UserName = UserInfo.UserName;
  user.FirstName = UserInfo.FirstName;
  user.LastName = UserInfo.LastName;
  user.About = UserInfo.About;
  user.ProfilePictureURL = UserInfo.ProfilePictureURL;

  response = { code: 200, message: 'User updated' };

  return response;
}
