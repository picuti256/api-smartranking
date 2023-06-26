import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresValidacaoParametroPipe } from './pipes/jogadores-validacao-parametros.pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarAtualizarJogador(@Body() criaJogadorDto: CriarJogadorDto) {
    this.jogadoresService.criarAtualizarJogador(criaJogadorDto);
  }

  @Get()
  async consultarJogadores(
    @Query('email') email: string,
  ): Promise<Jogador[] | Jogador> {
    return email
      ? this.jogadoresService.consultaJogadorPeloEmail(email)
      : this.jogadoresService.consultarTodosJogadores();
  }

  @Delete()
  async deletaJogador(
    @Query('email', JogadoresValidacaoParametroPipe) email: string,
  ): Promise<void> {
    this.jogadoresService.deletarJogar(email);
  }
}
