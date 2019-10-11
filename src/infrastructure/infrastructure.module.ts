import { Module } from '@nestjs/common';
import { userProviders } from './repository/mongo/user.repository';
import { databaseProviders } from './repository/mongo/connection.provider';

@Module({
  providers: [
    ...databaseProviders,
    ...userProviders
  ],
  exports: [...userProviders]
})
export class InfrastructureModule { }
