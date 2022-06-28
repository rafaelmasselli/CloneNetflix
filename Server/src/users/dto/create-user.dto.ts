import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name nao pode ser vazio' })
  @IsString({ message: 'Name tem que ser uma string' })
  @Length(2, 161, {
    message: 'O Name nao pode ser menor do que 2 e maior que 161',
  })
  name: string;

  @IsEmail({ message: 'coloque um email' })
  @IsNotEmpty({ message: 'Email nao pode ser vazio' })
  @IsString({ message: 'Email tem que ser uma string' })
  email: string;

  @IsNotEmpty({ message: 'Senha esta vazia' })
  @IsString({ message: 'Senha tem que ser uma string' })
  @Length(6, 20, {
    message: 'A senha deve ter mais de 6 dígitos e menos que 20 dígitos',
  })
  password: string;

  @IsNotEmpty({ message: 'Confirme sua senha' })
  @IsString({ message: 'Confirma a senha tem que ser uma string' })
  @Length(6, 20, {
    message: 'confirma senha deve ter mais de 6 dígitos e menos que 20 dígitos',
  })
  confirmpassword: string;
}
