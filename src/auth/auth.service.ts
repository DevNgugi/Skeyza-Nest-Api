import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}
  async signIn(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      return { message: 'user doesnt exist' };
    }
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const secret = this.config.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in configuration');
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: this.jwtService.signAsync(payload),
    };
  }

  googleLogin(req) {
    const secret = this.config.get<string>('JWT_SECRET');
    const payload = { email: req.user.profile.emails[0].value };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
