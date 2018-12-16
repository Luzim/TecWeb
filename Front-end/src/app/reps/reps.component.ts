import { Component, OnInit } from '@angular/core';
import { Rep } from './reps';
import { RepService } from '../rep.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

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
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadReps();
    this.route.data.subscribe( data=> this.info = data);
    
  
  }
  logout() {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('TIPO');
    this.router.navigate(['/login']);
  }

  userTipo(tipo: string) {
    if ( localStorage.getItem('TIPO') === tipo ) { return true; }
    return false;
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
  mostrar(rep: Rep,content):void {
    this.repSelecionado=rep;
    this.modalService.open(content, {ariaLabelledBy: 'modal-mostrar-aluno'})
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
