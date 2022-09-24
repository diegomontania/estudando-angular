import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  //expõe o valor para que o componente possa retornar este valor para o html
  //recebendo um valor do componente pai para o componente filho
  @Input() valor: number = 0;

  //utilizando um objeto para emitir um evento para o componente pai para que ele,
  //possa saber quando o valor mudou e possa fazer alguma acao a partir disso
  @Output() mudouValor = new EventEmitter();

  
  incrementa() {
    this.valor ++;

    //chama o objeto que vai emitir um evento para o objeto pai
    //pode-se passar quaisquer parametros, inclusive objetos.
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
