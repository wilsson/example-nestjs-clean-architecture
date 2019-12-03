
import { Connection, EntityManager, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { IUserRepository } from '../../../core/repository/user.repository';

@EntityRepository()
class UserRepository implements IUserRepository {

  constructor(private manager: EntityManager) { }

  async create(user: User) {
    const newUser = new User();
    newUser.id = user.id;
    newUser.name = user.name;

    return await this.manager.save(newUser);
  }

  async getAll() {
    return await this.manager.find(User);
  }

  async getById(id: string) {
    return await this.manager.findOne(User, { id })
  }

  update(id: string, user: User) {
    const newUser = new User();
    newUser.id = user.id;
    newUser.name = user.name;

    this.manager.update(id, newUser, User);
  }
};

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
    inject: ['DATABASE_CONNECTION'],
  },
];