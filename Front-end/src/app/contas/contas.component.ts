import { Component, OnInit } from '@angular/core';
import { Conta } from './conta';
import { ContaService } from '../conta.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas: Conta[];
  contaNova: Conta;
  contaSelecionado: Conta;
  info: any;
  constructor(private contaService: ContaService,
              private modalService: NgbModal,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
