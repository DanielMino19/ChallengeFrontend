import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiUrl = environment.URL;

  constructor(private http: HttpClient) { }

  getAllPersona(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPersona(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPersona(perso: any): Observable<any> {
    return this.http.post(this.apiUrl, perso);
  }

  updatePersona(id: string, perso: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, perso);
  }

  deletePersona(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
