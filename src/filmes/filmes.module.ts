import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [FilmesController],
  providers: [FilmesService, PrismaService],
})
export class FilmesModule {}
