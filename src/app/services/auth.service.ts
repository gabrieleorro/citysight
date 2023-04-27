import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = 'api/users';

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  // Metodo che permette il login
  login(usernameIn: string, passwordIn: string): Observable<any> {
    const user = { username: usernameIn, password: passwordIn };
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user);
  }

  // Metodo che salva i dati
  saveStorage(res: any) {
    const user = {
      name: res.name,
      username: res.username,
      password: res.password,
      role: res.role,
    }
    this.userService.userRole.next(res.role); // Stiamo inviando a userRole il ruolo dell'utente che ci arriverà
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Controllo dei dati
  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) != null;
  }

  // Metodo che ci permette il logout
  logout(): void {
    localStorage.removeItem('user');
    this.userService.userRole.next('');
  }
}
