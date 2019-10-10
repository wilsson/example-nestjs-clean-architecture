import { IUserRepository } from '../../../core/repository/user.repository';
import { User } from './user.entity';

class UserRepository implements IUserRepository {
  private users: any[] = [];

  getAllUsers(): any[] {
    return this.users;
  }

  getByIdUser(id: string): any {
    let [user] = this.users.filter((user) => user.id === id);
    return user;
  }

  createUser(user: { id: number, name: string }) {
    this.users.push(new User(user.id, user.name));
  }

  updateUser() { }
}

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: () => {
      return new UserRepository();
    }
  },
];