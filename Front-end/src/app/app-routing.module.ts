import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RepsComponent } from './reps/reps.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './login/login-auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'main', component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'users', component: UsersComponent, data : {title: 'Lista'} },
      {path: 'reps', component: RepsComponent,data: {title: 'Lista'}}
    ]
  },
  {path: 'users', component: UsersComponent, data : {title: 'Lista'} },
  {path: 'reps', component: RepsComponent,data: {title: 'Lista'}},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
