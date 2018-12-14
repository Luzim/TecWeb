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
  repUnico: Rep;
  contas: [];
  info: any;
  constructor(private repService: RepService,
              private modalService: NgbModal,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadReps();
    this.route.data.subscribe( data=> this.info = data);
    
  
  }
  loadReps(): void{
    this.repService.getReps().subscribe(
      reps => this.reps=reps
    );
  }
  editar(rep: Rep, content): void {

    this.repSelecionado = rep;

    this.modalService.open(content, {ariaLabelledBy: 'modal-editar-aluno'})
      .result.then((repForm: NgForm) => {
        this.repSelecionado.name = repForm.value.nome;
        this.salvar(this.repSelecionado);
    });
  }
  salvar(rep: Rep): void {
    this.repService.atualizarRep(rep).subscribe();
  }
  apagar(rep: Rep): void {
    this.repService.apagarRep(rep).subscribe();
    this.reps = this.reps.filter(a => a !== rep);
  }
  adicionar(content): void{
    this.repNovo = new Rep();

    this.modalService.open(content, {ariaLabelledBy: 'modal-adicionar-aluno'})
      .result.then((alunoFormAdidionar: NgForm) => {
      this.salvarNovorep(this.repNovo);
      this.reps.push(this.repNovo);
    });
  }
  //mostrar(content): void {
  //  
  //  this.modalService.open(content, {ariaLabelledBy: 'modal-contas-rep'})
  //    .result.then(() => {
  //    this.loadContas(this.repUnico);
  //  });
  //}
  //loadContas(repU: Rep): void{
  //  this.repService.getReps().subscribe(
  //    contas => this.repUnico.contas=contas
  //  );
  //}
  salvarNovorep(rep: Rep): void {
    this.repService.adicionar(rep).subscribe();
  }
}
