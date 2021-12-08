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
    this.titulo! = 'Lorem Ipsum teste do titulo';
    this.texto! = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A obcaecati illo id odio eveniet quas eos ab eius, amet perspiciatis rerum nostrum cumque quod iusto voluptatem similique unde facere tenetur?';
  }

}
