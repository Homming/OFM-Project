import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule, 
    TypeOrmModule.forFeature([User])
    ],
  providers: [AuthService],
})
export class AuthModule {}
