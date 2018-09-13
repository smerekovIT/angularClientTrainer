import { Component, OnInit } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { Client } from '../modules/Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {
  selectedClient: Client;


 clients$: Observable<Client[]>;
  private searchTerms = new Subject<string>()

  constructor(private clientService: ClientService) { }

  search (term: string): void {
    this.searchTerms.next(term)
  }
  onSelect(client: Client): void {
    this.selectedClient = client
  }

  ngOnInit(): void {
    this.clients$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=> this.clientService.searchClient(term))
    )
    
  }
  
}
