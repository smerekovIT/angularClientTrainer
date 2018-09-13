import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../modules/Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  selectedClient: Client;
  clients$: Observable<Client[]>;

  constructor( private clientService: ClientService ) { }

  ngOnInit() {
    this.getClients()
  }

  getClients(): void {
    this.clients$ = this.clientService.getClients();
  }

  onSelect(client: Client): void {
    this.selectedClient = client
  }
}
