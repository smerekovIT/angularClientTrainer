import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
 import { Client, CLIENTS } from './modules/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  Clients: Client[] = CLIENTS;

  constructor() { }
  
getClients(): Observable<Client[]> {
  return of (this.Clients);
}

searchClient (term: string): Observable<Client[]> {
  let re = new RegExp(term, 'i');

  if(!term.trim()){
    return of([])
  }
  return of( this.Clients.filter( c => c.general.firstName.match(re) ) )
}

}
