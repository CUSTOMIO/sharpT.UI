import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../core/data-service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];

  blogId: number;
  blog: object;

  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private clipboard: Clipboard) { }

  ngOnInit() {
    this.bodyTag.classList.add('main');

    this.activatedRoute.params.subscribe(params => {
      this.blogId = params.id;
      console.log(this.blogId);     
    });
    this.blogService.getBlogbyId(this.blogId).subscribe(res => {
      this.blog = res;
      setTimeout(() => {
        this.isLoading = false;
    }, 500);
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
  }
  ngOnDestroy() {
    this.bodyTag.classList.remove('main');
  }


  copyLink() {
    this.clipboard.copy(window.location.href)
  }

}
