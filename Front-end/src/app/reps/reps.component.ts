import { Component, OnInit } from '@angular/core';
import { Rep } from './reps';
import { RepService } from '../rep.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-reps',
  templateUrl: './reps.component.html',
  styleUrls: ['./reps.component.css']
})
export class RepsComponent implements OnInit {
  reps: Rep[];
  repSelecionado: Rep;
  repNovo: Rep;
  info: any;
  constructor(private repService: RepService,
              private modalService: NgbModal,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadReps();
    this.route.data.subscribe( data=> this.info = data);
  }
  loadReps(): void{
    this.repService.getUsers().subscribe(
      reps => this.reps=reps
    );
  }

}
