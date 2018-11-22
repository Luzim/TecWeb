import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RepsComponent } from './reps/reps.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent, data : {title: 'Lista'} },
  {path: 'reps', component: RepsComponent,data: {title: 'Lista'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
