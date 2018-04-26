import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../../_Models/blog.model';

@Component({
  selector: 'blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {

  @Input()
  public Blog: Blog;

  constructor()
  {
    
  }

  ngOnInit() {
  }

}
