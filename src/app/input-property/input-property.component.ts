import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  
  // tambem aceita poderia 'exportar' o nome da variavel como tendo outro nome.
  // ou seja no html, a referencia seria 'outroNome' e não 'nomeDoCursoComponenteInput'
  // @Input('outroNome') nomeDoCursoComponenteInput: string = "";

  // Passando o decorator de input para essa propriedade. Para poder receber o valor do input.
  @Input() nomeDoCursoComponenteInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
