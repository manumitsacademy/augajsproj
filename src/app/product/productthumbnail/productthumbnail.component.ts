import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productthumbnail',
  templateUrl: './productthumbnail.component.html',
  styleUrls: ['./productthumbnail.component.css']
})
export class ProductthumbnailComponent implements OnInit {

  constructor() { }
  @Input() prod;
  ngOnInit() {
    console.log(this.prod)
  }

}
