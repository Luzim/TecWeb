import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RepsComponent } from './reps/reps.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './login/login-auth.guard';
import { ContasComponent } from './contas/contas.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RepsComponent,
    LoginComponent,
    MainComponent,
    ContasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule,AppRoutingModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
