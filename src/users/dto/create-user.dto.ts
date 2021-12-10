import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name nao pode ser vazio' })
  @IsString()
  @Length(2, 161)
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email nao pode ser vazio' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'Senha esta vazia' })
  @IsString()
  @Length(6, 20)
  password: string;

  @IsNotEmpty({ message: 'Confirme sua senha' })
  @IsString()
  @Length(6, 20)
  confirmpassword: string;
}
