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
    this.titulo! = 'Texto Modelo.'
    this.texto! = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste explicabo iusto consequatur, cumque maxime fugit obcaecati a, dolore nisi consequuntur ea possimus veniam laboriosam tempore tenetur. Inventore, maxime reprehenderit.'
  }
}
