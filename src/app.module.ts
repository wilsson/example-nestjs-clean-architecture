import { Module } from '@nestjs/common';
import { InterfaceModule } from './interface/interface.module';

@Module({
  imports: [InterfaceModule],
})
export class AppModule { }
