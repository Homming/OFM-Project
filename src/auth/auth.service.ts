import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService
    ){}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOneEmail(email);
        if (user && user.password == pass) {
            const { password: passDB, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.nome }
    }

}
