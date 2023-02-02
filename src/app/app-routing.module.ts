import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgonauteListComponent } from './argonaute-list/argonaute-list.component';

const routes: Routes = [
  { path: 'argonauteList', component: ArgonauteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
