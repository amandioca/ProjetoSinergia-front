import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
   ) { }

  entrar(credenciaisDTO: CredenciaisDTO): Observable<CredenciaisDTO>{
    return this.http.post<CredenciaisDTO>('https://sinergiasocial.herokuapp.com/login', credenciaisDTO)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://sinergiasocial.herokuapp.com/cadastrar', usuario)
  }


}
