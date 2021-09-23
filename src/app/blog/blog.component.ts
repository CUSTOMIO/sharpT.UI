import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/data-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  bloggerLink: string;
  public blog: Array<object>;
  isLoading: boolean = true;


  constructor(
    private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getBlog().subscribe(res => {
      console.log(res);
      this.blog = res;
      this.isLoading = false
      }, (error) => {
        console.log(`THis is the error: ${error}`)
      });

  }

  newTab(url) {
    window.open(url, "_blank");
  }
}
