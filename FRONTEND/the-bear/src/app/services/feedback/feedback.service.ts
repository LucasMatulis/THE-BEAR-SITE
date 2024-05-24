import { Injectable } from '@angular/core';
import { Feedback } from 'src/app/model/feedback';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

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
    return this.http.get< number > (`${environment.urlApi}/feedback/nome/${nome}`);
  }

  removerFeedback(id?: number): Observable<{ success: boolean, feedbacks: Feedback[] }> {
    if (!id) return of({ success: false, feedbacks: [] });
    return this.http.delete<boolean>(`${environment.urlApi}/feedback/${id}`).pipe(
        switchMap((success) => {
            if (success) {
                // Se a remoção foi bem-sucedida, atualize a lista de feedbacks
                return this.buscarFeedBack().pipe(
                    map((feedbacks) => ({ success: true, feedbacks: feedbacks })),
                    catchError(() => of({ success: false, feedbacks: [] })) // Lidar com erro na busca de feedbacks
                );
            } else {
                // Se a remoção falhou, retorne false e a lista de feedbacks vazia
                return of({ success: false, feedbacks: [] });
            }
        }),
        catchError(() => of({ success: false, feedbacks: [] })) // Lidar com erro na remoção de feedback
    );
  }

}
