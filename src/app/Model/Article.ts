import {IArtStock} from './ArtStock';

export interface IArticle {
  cbmarq?:number;
  ar_PrixVen?: number;
  ar_Ref?: String;
  ar_Design?: String;
  ar_PrixAch?: number;
  fa_CodeFamille?: string;
  stocks?: IArtStock[]

}
