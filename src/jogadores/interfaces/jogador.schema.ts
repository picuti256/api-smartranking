import * as moongose from 'mongoose';

export const JogadorSchema = new moongose.Schema(
  {
    telefoneCelular: { type: String, unique: true },
    email: { type: String, unique: true },
    nome: String,
    ranking: String,
    posicaoRanking: Number,
    urlFotoJogador: String,
  },
  { timestamps: true, collection: 'jogadores' },
);
