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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/auth/auth-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('register')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
  @Get()
  findAll(): Promise<any[]> {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
  @UseGuards(AuthGuard())
  @Patch('edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }
  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.usersService.remove(id);
  }
  @UseGuards(AuthGuard())
  @Patch('add/:id')
  addfilmes(@AuthUser() user: User, @Param('id') id: string) {
    return this.usersService.addfilme(user, id);
  }
}
