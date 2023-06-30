import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Categoria } from './interface/categoria.interface';
import { CategoriasService } from './categorias.service';
import { CriarCategoriaDto } from './dtos/criar-cateogoria.dto';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCategoriaDto: CriarCategoriaDto,
  ): Promise<Categoria> {
    return await this.categoriasService.criarCategoria(criarCategoriaDto);
  }

  @Get()
  async consultarCategorias(
    @Query() params: string[],
  ): Promise<Array<Categoria> | Categoria> {
    const idCategoria = params['idCategoria'];
    const idJogador = params['idJogador'];

    if (idCategoria) {
      return await this.categoriasService.consultarCategoriaPeloId(idCategoria);
    }

    if (idJogador) {
      return await this.categoriasService.consultarCategoriaDoJogador(
        idJogador,
      );
    }

    return await this.categoriasService.consultarTodasCategorias();
  }

  @Put('/:categoria')
  @UsePipes(ValidationPipe)
  async atualizarCategoria(
    @Body() atualizarCategoriaDto: AtualizarCategoriaDto,
    @Param('categoria') categoria: string,
  ): Promise<void> {
    await this.categoriasService.atualizarCategoria(
      categoria,
      atualizarCategoriaDto,
    );
  }

  @Post('/:categoria/jogadores/:idJogador')
  async atribuirCategoriaJogador(@Param() params: string[]): Promise<void> {
    return await this.categoriasService.atribuirCategoriaJogador(params);
  }
}
