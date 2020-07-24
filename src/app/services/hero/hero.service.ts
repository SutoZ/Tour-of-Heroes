import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from 'src/app/components/heroes/mock-heroes';
import { Hero } from 'src/app/components/heroes/hero';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage("Heroes fetched!");
    return of(HEROES);
  }

  addMessage(message: string): void {
    return this.messageService.addMessage(message);
  }
  
}
