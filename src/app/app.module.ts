import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { KingDealsComponent } from './king-deals/king-deals.component';
import { MiddleSegmentComponent } from './middle-segment/middle-segment.component';
import { FeaturedMenuComponent } from './featured-menu/featured-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    VideoContainerComponent,
    MainSectionComponent,
    KingDealsComponent,
    MiddleSegmentComponent,
    FeaturedMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
