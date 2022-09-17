import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticleResponse } from './Model/Article.model';
import { IFamille } from './Model/Famille';
import { Comptet } from './Model/Comptet';
import { Collaborateur } from './Model/Collaborateur';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl= "http://localhost:8080/api";


  constructor(private http:HttpClient) { }

  getCollaboList():Observable<HttpResponse<Collaborateur[]>>{
    return this.http.get<Collaborateur[]>(this.APIUrl+'/Collaborateur',{ observe:'response'});
  }
  getFamille():Observable<HttpResponse<IFamille[]>>{
    return this.http.get<IFamille[]>(this.APIUrl+'/famille',{  observe: 'response' });

  }
  getArticleList():Observable<HttpResponse<IArticleResponse[]>>{
    return this.http.get<IArticleResponse[]>(this.APIUrl+'/Stock',{  observe: 'response' });

  }
 

  getArticleByFamily(fam:string):Observable<HttpResponse<IArticleResponse[]>>{
    return this.http.get<IArticleResponse[]>(this.APIUrl+'/search/'+fam, {  observe: 'response' });
  }
  
  getClientList():Observable<HttpResponse<Comptet[]>>{
    return this.http.get<Comptet[]>(this.APIUrl+'/Clients/liste',{ observe:'response'});
  }
  getClientByVille(vil:string):Observable<HttpResponse<Comptet[]>>{
    return this.http.get<Comptet[]>(this.APIUrl+'/Clients/ville/'+vil,{ observe:'response'});
  }

  getClientByNomCO(C:string):Observable<HttpResponse<Comptet[]>>{
    return this.http.get<Comptet[]>(this.APIUrl+'/Clients/commercial/'+C,{ observe:'response'});
  }

}
