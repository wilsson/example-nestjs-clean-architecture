import { Connection } from 'mongoose';
import { UserSchema } from './user.entity';
import { IUserRepository } from '../../../core/repository/user.repository';

class UserRepository implements IUserRepository {
  constructor(
    private userModel
  ) { }

  async createUser(user: any) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async getAllUsers() {
    const data = await this.userModel.find().exec();
    return data;
  }

  getByIdUser() { }
  updateUser() { }
}

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => {
      const repository = connection.model('User', UserSchema);
      return new UserRepository(repository);
    },
    inject: ['DATABASE_CONNECTION'],
  }
];