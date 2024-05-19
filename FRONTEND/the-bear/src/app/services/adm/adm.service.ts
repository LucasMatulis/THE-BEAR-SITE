import { Injectable } from '@angular/core';
import { Adm } from '../../model/adm';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  constructor(private http: HttpClient) { }

  buscarAdms(): Observable<Adm[]> {
    return this.http.get<Adm[]>(`${environment.urlApi}/adm`);
  }

  buscarAdmId(id? : number): Observable <number | undefined>{

    if(!id) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/adm/${id}`);

  }

  buscarAdmNome(nome? : string): Observable <number | undefined>{

    if(!nome) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/adm/nome/${nome}`);

  }
}
