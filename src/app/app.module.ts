import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


//PDF Viewer

//Custom
import { LayoutComponent } from './layout/layout.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LayoutSidemenuComponent } from './layout/layout-sidemenu/layout-sidemenu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NoticeBoardComponent } from './shared/component/notice-board/notice-board.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutFooterComponent,
    LayoutSidemenuComponent,
    NoticeBoardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
