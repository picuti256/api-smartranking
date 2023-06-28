import * as moongose from 'mongoose';

export const JogadorSchema = new moongose.Schema(
  {
    email: { type: String, unique: true },
    telefoneCelular: { type: String },
    nome: String,
    ranking: String,
    posicaoRanking: Number,
    urlFotoJogador: String,
  },
  { timestamps: true, collection: 'jogadores' },
);
