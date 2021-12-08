import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  classToDiv = {};

  constructor() {

    this.classToDiv = {
      'text-success': true
    };
  }

  ngOnInit() {
    this.titulo! = 'Lorem Ipsum é simples e siga adiante'
    this.texto! = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vel neque, consectetur quidem, explicabo voluptatem recusandae dolore quibusdam laboriosam fugiat adipisci cum! Quaerat tempore fuga repellat. Quo quos saepe voluptatibus'
  }

}
