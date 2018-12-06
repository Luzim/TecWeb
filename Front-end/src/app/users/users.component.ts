import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  userSelecionado: User;
  userNovo: User;

  info: any;
  constructor(private userService: UserService,
              private modalService: NgbModal,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    
    this.loadUsers();
    this.route.data.subscribe( data=> this.info = data);
  }
  loadUsers(): void{
    
    this.userService.getUsers().subscribe(
      users => this.users=users
    );    
  }

  editar(user: User, content): void {

    this.userSelecionado = user;

    this.modalService.open(content, {ariaLabelledBy: 'modal-editar-aluno'})
      .result.then((userForm: NgForm) => {
        this.userSelecionado.name = userForm.value.nome;
        this.userSelecionado.nickname = userForm.value.nickname;
        this.userSelecionado.email = userForm.value.email;
        

        this.salvar(this.userSelecionado);
    });
  }
  salvar(user: User): void {
    this.userService.atualizarUser(user).subscribe();
  }
  apagar(user: User): void {
    this.userService.apagarUser(user).subscribe();
    this.users = this.users.filter(a => a !== user);
  }
  adicionar(content): void{
    this.userNovo = new User();

    this.modalService.open(content, {ariaLabelledBy: 'modal-adicionar-aluno'})
      .result.then((alunoFormAdidionar: NgForm) => {
      this.salvarNovoUser(this.userNovo);
      this.users.push(this.userNovo);
    });
  }
  salvarNovoUser(user: User): void {
    this.userService.adicionar(user).subscribe();
  }
}
