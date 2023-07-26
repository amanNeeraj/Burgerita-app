import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { KingDealsComponent } from './king-deals/king-deals.component';
import { MiddleSegmentComponent } from './middle-segment/middle-segment.component';
import { FeaturedMenuComponent } from './featured-menu/featured-menu.component';
import { FooterComponent } from './footer/footer.component';
import { NearbyStoresComponent } from './nearby-stores/nearby-stores.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    VideoContainerComponent,
    MainSectionComponent,
    KingDealsComponent,
    MiddleSegmentComponent,
    FeaturedMenuComponent,
    FooterComponent,
    NearbyStoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
