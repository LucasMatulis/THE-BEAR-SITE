import { Injectable } from '@angular/core';
import { Feedback } from 'src/app/model/feedback';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }


  inserirFeedBack(feedbak?: Feedback):Observable <boolean>{

    if(!feedbak) return of(false);
    return this.http.post<boolean>(`${environment.urlApi}/feedback`, feedbak)
  }


  buscarFeedBack(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${environment.urlApi}/feedback`);
  }

  buscarFeedBackNome(nome? : string): Observable <number | undefined>{
    if(!nome) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/feedbak/nome/${nome}`);
  }

  removerFeedBack(id?: number) : Observable<boolean | undefined>{
    if(!id) return of(undefined);
    return this.http.delete<boolean>(`${environment.urlApi}/feedbak/${id}`)
  }

}
