import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty({ message: 'Name nao pode ser vazio' })
  @IsString()
  @Length(2, 161)
  name: string;

  @IsNotEmpty({ message: 'genero nao pode estar vazio' })
  @IsString()
  genre: string;

  @IsNotEmpty({ message: 'duracao nao pode estar vazio' })
  @IsString()
  duration: string;

  @IsNotEmpty({ message: 'autor nao pode estar vazio' })
  @IsString()
  author: string;
}
