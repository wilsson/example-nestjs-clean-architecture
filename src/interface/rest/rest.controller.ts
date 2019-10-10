import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  Param,
  Res,
  HttpStatus
} from '@nestjs/common';

import { Response } from 'express';
import { UserService } from '../../core/services/user/user.service';

@Controller('rest')
export class RestController {
  constructor(
    public service: UserService
  ) { }

  @Post()
  async create(@Body() body) {
    try {
      return await this.service.create(body);
    } catch (e) {
      throw new BadRequestException(JSON.parse(e));
    }
  }

  @Get()
  async getAll() {
    const data = await this.service.getAll();
    return {
      code: HttpStatus.OK,
      data: data
    };
  }

  @Get(':id')
  async getById(@Param() params) {
    const data = await this.service.getById(params.id);
    return {
      code: HttpStatus.OK,
      data: data
    };
  }
}