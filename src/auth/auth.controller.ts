import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  //dependacy injection for instantiating the service in the controller
  constructor(private authService: AuthService) {
    authService.test();
  }
}
