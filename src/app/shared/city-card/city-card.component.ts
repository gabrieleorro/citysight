import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { delay, first, take } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit, OnDestroy {

  @Input() pag: string;

  citta: City[];
  page = 1;
  cittaPerPagina = 4;
  cittaTotali: number;
  ruolo: any;
  loading = true;
  ricercato: string;


  constructor(
    private cityService: CityService,
    private messageService: MessageService,
    private userService: UserService,
  ) {}

  ngOnDestroy(): void {
    console.log('Utente uscito dal componente')
  }

  ngOnInit(): void {
    this.getCities();
  }

  onGetUser(username): void {
    this.userService.getUser(username).pipe(take(1)).subscribe({
      next: res => {
        this.ruolo = res.role;
      },
      error: (err) => console.log(err)
    })
  }

  getCities(): void {
    this.cityService.getCities().pipe(first()).subscribe({
      next: (response) => {
        this.citta = response;
        this.cittaTotali = response.length;
        if(response.length < 4) {
          this.cittaPerPagina = response.length;
        }
        if(response) {
          this.messageService.add({severity: 'success', summary: 'Completato!', detail: 'Prodotto caricato correttamente!'});
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  paginate(event) {
    event.page = event.page + 1;
    this.page = event.page;
  }

}
