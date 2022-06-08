import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FilmesModule } from './filmes/filmes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, FilmesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
