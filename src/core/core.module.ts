import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { InfrastructureModule } from '../Infrastructure/Infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [UserService],
  exports: [UserService]
})
export class CoreModule { }
