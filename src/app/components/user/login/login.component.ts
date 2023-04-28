import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {

  loggingError: string;
  user: any;

  credenziali = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  onSubmit() {
    const credentials = this.credenziali.getRawValue();
    if (credentials.username != '' && credentials.password != '') {
      this.authService.login(credentials.username, credentials.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res) {
            this.messageService.add({severity: 'success', summary: 'Daje', detail: 'Hai fatto er login.', life: 5000});
            this.authService.saveStorage(res);
            setTimeout(() => this.router.navigate(['home']), 3000);
          } else {
            this.loggingError = 'Username o password errati.';
          }
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Errore', detail: 'Username o password errati.', life: 5000});
        }
      })
    }
  }

}
