import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private database: PrismaService) {}

  // POST

  async create(dado: CreateUserDto): Promise<User> {
    if (dado.password !== dado.confirmpassword) {
      throw new UnauthorizedException('A confirmacao de senha esta Errada');
    }
    const user = this.database.user.findUnique({
      where: { email: dado.email },
    });
    if (user) {
      throw new ConflictException('Esse email ja esta cadastrado');
    }

    const hash = 3;
    const hashPassword = await bcrypt.hash(dado.password, hash);

    delete dado.confirmpassword;

    const userNew = await this.database.user.create({
      data: {
        ...dado,
        password: hashPassword,
      },
    });
    delete userNew.password;
    return userNew;
  }

  //ALL

  async findAll(): Promise<any[]> {
    const users = await this.database.user.findMany();
    const userNoPass = users.map(({ password, ...intem }) => intem);
    return userNoPass;
  }

  //Get One

  async findOne(id: string): Promise<User> {
    const user = await this.database.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('O filme nao foi encontrador');
    }
    delete user.password;
    return user;
  }

  // Patch

  async update(id: string, dados: UpdateUserDto): Promise<User> {
    const users = await this.database.user.update({
      data: dados,
      where: { id: id },
    });
    delete users.password;
    return users;
  }

  // remove

  async remove(id: string): Promise<{ message: string }> {
    const user = await this.database.user.delete({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Usuario nao encotrado');
    } else {
      await this.database.user.delete({
        where: { id },
      });
    }
    return { message: 'Usario deletador com sucesso' };
  }
}
