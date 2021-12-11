import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { filmes } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @UseGuards(AuthGuard())
  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto): Promise<filmes> {
    return this.filmesService.create(createFilmeDto);
  }

  @UseGuards(AuthGuard())
  @Get()
  findAll(): Promise<filmes[]> {
    return this.filmesService.findAll();
  }

  @UseGuards(AuthGuard())
  @Get(':id')
  findOne(@Param('id') id: string): Promise<filmes> {
    return this.filmesService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFilmeDto: UpdateFilmeDto,
  ): Promise<filmes> {
    return this.filmesService.update(id, updateFilmeDto);
  }

  @UseGuards(AuthGuard())
  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.filmesService.remove(id);
  }
}
