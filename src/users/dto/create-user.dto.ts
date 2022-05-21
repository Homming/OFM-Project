import { IsNotEmpty, IsNumber, IsString, IsDate, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    sobrenome: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;


}