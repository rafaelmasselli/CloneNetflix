import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class Credentials {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(6, 15)
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
