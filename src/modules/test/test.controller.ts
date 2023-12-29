import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test')
@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  getTest(): string {
    return this.testService.getTest();
  }

  @Get(':name')
  getHello(@Param('name') name: string): string {
    return `Hello ${name}!`;
  }
}
