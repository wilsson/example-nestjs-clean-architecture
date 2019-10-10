import { Connection } from 'mongoose';
import { UserSchema } from './user.entity';
import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from '../../../core/repository/user.repository';

@Injectable()
class UserRepository implements IUserRepository {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel
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
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'USER_REPOSITORY',
    useExisting: UserRepository,
  },
  UserRepository
]