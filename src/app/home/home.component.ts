import { Component, OnInit } from '@angular/core';
import { StandardService } from '../core/data-service';
import { NoticeService } from '../core/data-service/notice/notice.service';
import { Notice, Standard } from '../core/model';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public notices: Notice[];
  public standards: Standard[];
  constructor(private noticeService: NoticeService,
              private standardService: StandardService) { }

  ngOnInit(): void {

    this.noticeService.getNotice()
      .subscribe(res => {
        this.notices = res;
      });

    this.standardService.getStandardByRank()
      .subscribe(res => {
        this.standards = res;
      });
  }

}
