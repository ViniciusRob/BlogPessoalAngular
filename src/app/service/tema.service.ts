import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Pesquisar todos os temas
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://bpdvrfds.herokuapp.com/temas', this.token)
  }

  //Pesquisar por Id
  getByIdTema(id: number):Observable<Tema>{
    return this.http.get<Tema>(`https://bpdvrfds.herokuapp.com/temas/${id}`, this.token)
  }

  //Pesquisar por Descrição
  getByDescricaoTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://bpdvrfds.herokuapp.com/temas/descricao/${descricao}`, this.token)
  }

  //Inserir um novo tema
  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://bpdvrfds.herokuapp.com/temas', tema, this.token)
  }

  //Editar um tema
  putTema(tema:Tema): Observable<Tema>{
    return this.http.put<Tema>('https://bpdvrfds.herokuapp.com/temas', tema, this.token)
  }

  //Excluir um tema
  deleteTema(id: number){
    return this.http.delete(`https://bpdvrfds.herokuapp.com/temas/${id}`, this.token)
  }
}
