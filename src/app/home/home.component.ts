import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NoticeService } from '../core/data-service/notice/notice.service';
import { Notice } from '../core/model';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public notices: Notice[];
  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotice()
    .subscribe(res => {
      this.notices = res;
    });
  }

}
