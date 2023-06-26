import { PipeTransform, ArgumentMetadata } from '@nestjs/common';

export class JogadoresValidacaoParametroPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`value: ${value}, metadata: ${metadata.type}`);

    return value;
  }
}
