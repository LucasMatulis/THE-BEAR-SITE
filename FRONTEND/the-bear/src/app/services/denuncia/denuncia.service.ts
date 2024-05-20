import { Injectable } from '@angular/core';
import { Denuncia } from '../../model/denuncia';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(private http : HttpClient) { }


  inserirDenuncia(denuncia?: Denuncia):Observable <boolean>{

    if(!denuncia) return of(false);
    return this.http.post<boolean>(`${environment.urlApi}/denuncia`, denuncia)
  }


  buscarDenuncia(): Observable<Denuncia[]> {
    return this.http.get<Denuncia[]>(`${environment.urlApi}/denuncia`);
  }

  buscarDenunciaNome(nome? : string): Observable <number | undefined>{
    if(!nome) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/denuncia/nome/${nome}`);
  }

  removerDenuncia(id?: number) : Observable<boolean | undefined>{
    if(!id) return of(undefined);
    return this.http.delete<boolean>(`${environment.urlApi}/denuncia/${id}`)
  }

}
