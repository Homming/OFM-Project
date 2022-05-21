import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() pdateUserDto : UpdateUserDto ) {
        return await this.userService.update(+id, pdateUserDto);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.userService.exclude(+id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const user = await this.userService.findOne(+id)
        if (!user) {
            throw new NotFoundException('Usuário Não localizado');
        }
    }

}
