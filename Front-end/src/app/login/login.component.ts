import {Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../users/user';
import { UserService } from '../user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nome: 'Joao';
  password: '123';
  userNovo: User;
  users: User[];
  info: any
  ngOnInit() {
    this.loadUsers();
    this.route.data.subscribe( data=> this.info = data);
  }
  
  constructor(private loginService: LoginService, 
              private router: Router, 
              private ngZone: NgZone,
              private userService: LoginService,
              private modalService: NgbModal,
              private route: ActivatedRoute) {
  }
  loadUsers(): void{
    
    this.loginService.getUsers().subscribe(
      users => this.users=users
    );    
  }
  login(email,password) {
    this.loginService.login(email, password).subscribe(
      user => {
         if (user.token) {
          localStorage.setItem('TOKEN', user.token);
          localStorage.setItem('TIPO', user.tipo);

          if ( user.tipo === 'admin' ) {
            this.ngZone.run(() => {
              this.router.navigateByUrl('/users');
              
            });
          } else {
            this.ngZone.run(() => {
              this.router.navigateByUrl('/reps');
            });
          }
        }
      }, r => {
        alert(r.error.error);
      });
  }
  cadastre(content){
    this.userNovo = new User();
    this.modalService.open(content, {ariaLabelledBy: 'modal-adicionar-aluno'})
      .result.then((userFormAdidionar: NgForm) => {
      this.salvarNovoUser(this.userNovo);
      this.users.push(this.userNovo);
    });
  }
  salvarNovoUser(user: User): void {
    
    this.loginService.cadastrar(user).subscribe();
  }

  
}
