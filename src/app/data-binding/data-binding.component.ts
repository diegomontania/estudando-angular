import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://diego.com';
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com.br/50/50";

  valorAtual: string = "";
  valorSalvo: string = "";
  mouseIsOuver: boolean = false;

  nome: string = "abc";

  //objeto pessoa
  pessoa: any = {
    nome: "diego",
    idade: 27,
    altura: 1.85
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  //declara mmetodo para ser pego no template
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return this.cursoAngular;
  }

  botaoClicado(){
    return alert("oi");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log(evento);

    //retorna o valor do elemento, que é um input html, fazendo conversao
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valorPassadoPeloTarget: any){
    this.valorSalvo = valorPassadoPeloTarget;
  }

  passandoMouse(){
    this.mouseIsOuver = !this.mouseIsOuver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
