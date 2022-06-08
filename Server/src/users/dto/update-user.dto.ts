import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Name nao pode ser vazio' })
  @IsString()
  @IsOptional()
  @Length(2, 161)
  name: string;

  @IsEmail()
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Email nao pode ser vazio' })
  email: string;
}
