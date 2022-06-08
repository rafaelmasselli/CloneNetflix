import { IsString, IsOptional, IsNotEmpty, Length } from 'class-validator';

export class UpdateFilmeDto {
  @IsNotEmpty({ message: 'Name nao pode ser vazio' })
  @IsString()
  @IsOptional()
  @Length(2, 161)
  name: string;

  @IsNotEmpty({ message: 'genero nao pode estar vazio' })
  @IsString()
  @IsOptional()
  genre: string;

  @IsNotEmpty({ message: 'genero nao pode estar vazio' })
  @IsString()
  @IsOptional()
  author: string;

  @IsNotEmpty({ message: 'genero nao pode estar vazio' })
  @IsString()
  @IsOptional()
  duration: string;
}
