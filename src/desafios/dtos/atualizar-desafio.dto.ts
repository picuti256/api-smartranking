import { IsOptional } from 'class-validator';
import { DesafioStatus } from '../interface/desafio-status.enum';

export class AtualizarDesafioDto {
  @IsOptional()
  //@IsDate()
  dataHoraDesafio: Date;

  @IsOptional()
  status: DesafioStatus;
}
