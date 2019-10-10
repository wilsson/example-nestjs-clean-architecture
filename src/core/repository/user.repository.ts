export interface IUserRepository {
  createUser(user: any): any;
  getAllUsers(): any;
  getByIdUser(id: string): any;
  updateUser(id: string, user: any): any;
};