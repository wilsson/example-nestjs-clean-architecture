import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { IUserRepository } from '../../repository/user.repository';
import { User } from '../../schemes/user.scheme';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private repository: IUserRepository
  ) { }

  async getAll() {
    return await this.repository.getAll();
  }

  getById(id: string) {
    return this.repository.getById(id);
  }

  async create(user: any) {
    const object = plainToClass(User, user);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw JSON.stringify(errors);
    }
    return await this.repository.create(object);
  }

  update(id: string, user: any) {
    return this.repository.update(id, user);
  }
}