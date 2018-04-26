import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../_Services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Blogs: Array<any> = new Array<any>();

  constructor(public UI: UIService)
  {
    for (let index = 0; index < this.getRandomArbitrary(50, 100); index++) 
    {
      this.Blogs.push({});
    }
  }

  getRandomArbitrary(min: number, max: number): number
  {
    return Math.random() * (max - min) + min;
  }

  ngOnInit() {
  }

}
