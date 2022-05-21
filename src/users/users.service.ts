import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async findAll() {
        return this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }

    async findOne(id: number) {
        return this.userRepository.findOne({ id });
    }

    async findOneEmail(email: string) {
        return this.userRepository.findOne({ email });
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        const user = await this.findOne(id);

        if(!user){
            throw new NotFoundException(' Usuário não encontrado ');
        }

        return this.userRepository.update({ id }, updateUserDto);
    }

    async exclude(id: number) {
        return this.userRepository.delete({ id });
    }

}
