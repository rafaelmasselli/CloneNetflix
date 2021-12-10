import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { filmes } from '@prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto): Promise<filmes> {
    return this.filmesService.create(createFilmeDto);
  }

  @Get()
  findAll(): Promise<filmes[]> {
    return this.filmesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<filmes> {
    return this.filmesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFilmeDto: UpdateFilmeDto,
  ): Promise<filmes> {
    return this.filmesService.update(id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.filmesService.remove(id);
  }
}
