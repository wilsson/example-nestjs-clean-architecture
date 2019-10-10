import { Module } from '@nestjs/common';
import { userProviders } from './repository/mysql/user.repository';
import { databaseProviders } from './repository/mysql/connection.provider';

@Module({
  providers: [
    ...databaseProviders,
    ...userProviders
  ],
  exports: [...userProviders]
})
export class InfrastructureModule { }
