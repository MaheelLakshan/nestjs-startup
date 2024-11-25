import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //dependacy injection for instantiating the service in the controller
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'I am sign Up';
  }

  signin() {
    return 'i am sign in';
  }
}
