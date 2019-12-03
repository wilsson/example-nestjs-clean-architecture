export interface IUserRepository {
  create(user: any): any;
  getAll(): any;
  getById(id: string): any;
  update(id: string, user: any): any;
};