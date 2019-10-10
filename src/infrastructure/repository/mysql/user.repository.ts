
import { Connection, Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { IUserRepository } from '../../../core/repository/user.repository';

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {

  async createUser(user) {
    return await this.insert(user);
  }

  async getAllUsers() {
    return await this.find();
  }

  async getByIdUser(id) {
    return await this.findOne(id)
  }

  updateUser(id, user) {
    this.update(id, user);
  }
};

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
    inject: ['DATABASE_CONNECTION'],
  },
];