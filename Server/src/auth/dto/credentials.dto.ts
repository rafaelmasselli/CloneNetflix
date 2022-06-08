import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class Credentials {
  @IsString()
  @Length(6, 15)
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
}
