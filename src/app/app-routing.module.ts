import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientListComponent } from './client-list/client-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'  },
  { path: 'clients', component: ClientListComponent },
  { path: 'search', component: ClientSearchComponent },
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
 exports: [RouterModule]
})
export class AppRoutingModule { }
