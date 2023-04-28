import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';
import { take } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService]
})
export class SignupComponent {

  utenteInserito: any;

  utente = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    birthDate: new FormControl(''),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    cellPhone: new FormControl('', [Validators.required, Validators.pattern(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/)]),
    ripetiPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    terms: new FormControl('', Validators.requiredTrue),
  },
  [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  );

  constructor(
    private config: PrimeNGConfig,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.config.setTranslation({
      weak: 'Debole',
      medium: 'Media',
      strong: 'Forte',
      passwordPrompt: 'Livello di sicurezza',
    });
  }

  onSubmit() {
    const user = this.utente.getRawValue();
    this.userService.insertUser(user).pipe(take(1)).subscribe({
      next: (res) => {
        console.log('Utente inserito correttamente', res);
        this.utenteInserito = res;
        this.userService.datiUtente.next(user);
        this.messageService.add({severity: 'success', summary: 'Completato', detail: 'Hai fatto la registrazione.', life: 5000});
        setTimeout(() => this.router.navigate(['home']), 3000);
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({severity: 'error', summary: 'Errore', detail: 'Registrazione fallita.', life: 5000});
      }
    })
  }
}
