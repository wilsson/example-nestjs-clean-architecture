import { Module } from '@nestjs/common';
import { RestController } from './rest/rest.controller';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [RestController],
})
export class InterfaceModule { }
