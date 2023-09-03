import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8000';  // URL base do backend

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): void {
    const data = { username, password };
    const headers = { 'Content-Type': 'application/json' };
    
    firstValueFrom(this.http.post<any>(`${this.baseUrl}/login/`, data, { headers }))
    .then(res =>{
      console.log(res.status)
      if (res.status === 401) {
         Swal.fire('Erro de autenticação','Usuário ou senha inválidos', 'warning');
      } else {
        const  token = res.result.access_token
        const  refresh_token = res.result.access_token
        sessionStorage.setItem('accessToken', token);
        sessionStorage.setItem('refreshToken', refresh_token);
        this.router.navigate(['/home']);
      }
    })
    .catch(err => {
      Swal.fire('Erro de autenticação', 'Usuário ou senha inválidos', 'warning');
    });
  }

  getToken(): string | null {
    return sessionStorage.getItem('accessToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  } 
  
  logout(): void {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }

  createUser(nome: string, login: string, senha: string, adm: boolean): void {
    const data = {
      nome,
      login,
      senha,
      adm,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`, 
    });
    firstValueFrom(this.http.post<any>(`${this.baseUrl}/create_user/`, data, { headers }))
    .then(res => {
      console.log(res)
      if(res.status == 200)
        Swal.fire('', 'Usuário cadastrado', 'success');
    
      if(res.status == 210)
        Swal.fire('', 'Usuário atualizado', 'success');
    
    })
    .catch(err => {
      if(err.status == 300)
        Swal.fire('', 'Usuário com mesmo login já existe', 'warning');
      if(err.status == 301)
        Swal.fire('', 'Você não pode alterar seu próprio perfil', 'warning');
    });
  }

  getAllUsers(): Observable<any[]> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`,
    });
  
    return this.http.post<any[]>(`${this.baseUrl}/get_all_users/`, null, { headers });
  }
  
  excluirUser(user_id: number): void {
    console.log(user_id)
    const data = {
        user_id
      };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`,
    });
    firstValueFrom(this.http.post<any>(`${this.baseUrl}/excluir_user/`, data, { headers }))
    .then(res => {
      console.log(res)
        if(res.status == 200)
         Swal.fire('', 'Usuário deletado', 'success');

    })
    .catch(err => {
        console.log(err)
    //   if(err.status == 300)
         Swal.fire('', err, 'warning');
    //   if(err.status == 301)
    //     Swal.fire('', 'Você não pode alterar seu próprio perfil', 'warning');
    });
  }
}
