import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {

  citta: any[];

  constructor(
    private cityService: CityService
  ){}

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe({
      next: (response) => {
        this.citta = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
