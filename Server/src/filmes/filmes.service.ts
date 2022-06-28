import { filmes } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FilmesService {
  constructor(private database: PrismaService) {}

  async create(dado: CreateFilmeDto): Promise<filmes> {
    const filme = await this.database.filmes.create({ data: dado });
    return filme;
  }

  async findAll(): Promise<filmes[]> {
    const filmesALL = await this.database.filmes.findMany();
    return filmesALL;
  }

  async findOne(id: string): Promise<filmes> {
    const filmes = await this.database.filmes.findUnique({
      where: { id },
    });
    if (!filmes) {
      throw new NotFoundException('Filme nao encontrado');
    }
    return filmes;
  }

  async update(id: string, updateFilmeDto: UpdateFilmeDto): Promise<filmes> {
    const filme = await this.database.filmes.update({
      data: updateFilmeDto,
      where: { id },
    });
    return filme;
  }

  async remove(id: string): Promise<{ message: string }> {
    const filmes = await this.database.filmes.findUnique({
      where: { id },
    });
    if (!filmes) {
      throw new NotFoundException('O filme nao foi encontrado');
    } else {
      await this.database.filmes.delete({
        where: { id },
      });
    }
    return { message: 'filme deletado com sucesso' };
  }
}
