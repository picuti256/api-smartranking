import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Categoria } from './interface/categoria.interface';
import { CategoriasService } from './categorias.service';
import { CriarCategoriaDto } from './dtos/criar-cateogoria.dto';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriaService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCategoriaDto: CriarCategoriaDto,
  ): Promise<Categoria> {
    return await this.categoriaService.criarCategoria(criarCategoriaDto);
  }

  @Get()
  async consultarCategorias(): Promise<Array<Categoria>> {
    return await this.categoriaService.consultarTodasCategorias();
  }

  @Get('/:categoria')
  async consultCategoriaPeloId(
    @Param('categoria') categoria: string,
  ): Promise<Categoria> {
    return await this.categoriaService.consultarCategoriaPeloId(categoria);
  }

  @Put('/:categoria')
  @UsePipes(ValidationPipe)
  async atualizaCategoria(
    @Body() atualizarCategoriaDto: AtualizarCategoriaDto,
    @Param('categoria') categoria: string,
  ): Promise<void> {
    return await this.categoriaService.atualizaCategoria(
      categoria,
      atualizarCategoriaDto,
    );
  }

  @Post('/:categoria/jogadores/:idJogador')
  async atribuirCategoriaJogador(@Param() params: string[]): Promise<void> {
    return await this.categoriaService.atribuirCategoriaJogador(params);
  }
}
