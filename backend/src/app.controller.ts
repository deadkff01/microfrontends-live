import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from './models/request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getItems(@Body() request: Request) {
    return this.appService.getItems(request);
  }
}
