import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll() {
        return await this.catsService.findAll();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return await this.catsService.create(createCatDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const cat = await this.catsService.findOne(+id);
        if(!cat) {
            throw new NotFoundException('Gato não encontrado');
        }
        return cat;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return await this.catsService.update(+id, updateCatDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.catsService.remove(+id);
    }

}
