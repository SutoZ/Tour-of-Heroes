import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from 'src/app/components/heroes/mock-heroes';
import { Hero } from 'src/app/components/heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
