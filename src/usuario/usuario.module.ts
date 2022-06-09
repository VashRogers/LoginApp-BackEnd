import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usuarioProviders,
    UsuarioService,
  ],
})
export class UsuarioModule {}