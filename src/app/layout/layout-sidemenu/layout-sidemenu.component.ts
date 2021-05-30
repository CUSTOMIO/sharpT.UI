import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CourseService } from '../../core/data-service';
import { Course } from '../../core/model';

@Component({
  selector: 'app-layout-sidemenu',
  templateUrl: './layout-sidemenu.component.html',
  styleUrls: ['./layout-sidemenu.component.scss']
})
export class LayoutSidemenuComponent implements OnInit {

  public course: Course[];
  contentMargin = 240;
  isExpanded = true;
  isMenuOpen = true;
  isShowing = false;
  showSubmenu: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private courseService: CourseService) { }

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
      this.contentMargin = 240;
    }
  }
}
