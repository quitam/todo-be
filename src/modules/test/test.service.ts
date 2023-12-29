import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(): string {
    return 'Đây là test service của module test';
  }
}
