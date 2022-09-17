import {IDepot} from './Depot';

export interface IArtStock{
  cbmarq?:number;
  as_MontSto?:number;
  as_QteSto?:number;
  f_depot?: IDepot[];
}
