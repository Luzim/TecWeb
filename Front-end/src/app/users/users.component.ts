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
}
