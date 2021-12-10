import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NoticeService } from 'src/app/core/data-service';
import { Notice } from 'src/app/core/model';
import { environment } from 'src/environments/environment';
import { DocViewerComponent } from '../doc-viewer/doc-viewer.component';

@Component({
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss'],
})
export class NoticeBoardComponent implements OnInit {

  public notices: Notice[];
  public endpoint = environment.api_endpoint;


  constructor(private noticeService: NoticeService,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private dialogRef: MatDialogRef<NoticeBoardComponent>,
    private dialog: MatDialog
    ) {
  }

  ngOnInit() {
    this.noticeService.getNotice()
    .subscribe(res => {
      this.notices = res;
      console.log(res)
    });
  }

  public previewDocument(notice: Notice) {
    const pdfSource = this.endpoint + notice.file;
    const dialogData = {
      width: '90%',
      data: {
        pdfFileName: notice.file.replace('/assets/file/', ''),
        pdfSource,
        previewContentType:  notice.mimetype
      }
    };
    const dialogRef: MatDialogRef<DocViewerComponent> = this.dialog.open(DocViewerComponent, dialogData);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}


