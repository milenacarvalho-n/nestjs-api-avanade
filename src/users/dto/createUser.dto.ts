import {
    IsNotEmpty,
    IsEmail,
    IsString,
    MinLength,
    MaxLength,
  } from 'class-validator';
  
  export class CreateUserDTO {
    // os decorators são responsáveis por validar os dados que estão sendo enviados
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
  }