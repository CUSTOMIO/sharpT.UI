import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CourseService } from '../../core/data-service';
import { Course } from '../../core/model';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { NoticeBoardComponent } from 'src/app/shared/component/notice-board/notice-board.component';

@Component({
  selector: 'app-layout-sidemenu',
  templateUrl: './layout-sidemenu.component.html',
  styleUrls: ['./layout-sidemenu.component.scss']
})
export class LayoutSidemenuComponent implements OnInit {

  public course: Course[];
  contentMargin = 200;
  isExpanded = true;
  isMenuOpen = true;
  isShowing = false;
  showSubmenu: boolean = false;
  public endpoint = environment.api_endpoint;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private courseService: CourseService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(res => {
      this.course = res;
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 200;
    }
  }

  toggleBoard(): void {
    const dialogRef = this.dialog.open(NoticeBoardComponent, {
      width: '90%',
      height: '80%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}
