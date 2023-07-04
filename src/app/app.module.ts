import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeSection3Component } from './home-section3/home-section3.component';
import { WebComponent } from './web/web.component';
import { AppDevComponent } from './app-dev/app-dev.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { PcMaintananceComponent } from './pc-maintanance/pc-maintanance.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSection4Component } from './home-section4/home-section4.component';
import { HomeSection2Component } from './home-section2/home-section2.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BottomsectionComponent } from './bottomsection/bottomsection.component';
import { NewblanckcompComponent } from './newblanckcomp/newblanckcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSection3Component,
    WebComponent,
    AppDevComponent,
    AboutUsComponent,
    ServicesComponent,
    GraphicsComponent,
    SoftwareDevComponent,
    DigitalMarketingComponent,
    PcMaintananceComponent,
    CarouselComponent,
    FooterComponent,
    HomeSection4Component,
    HomeSection2Component,
    HeaderComponent,
    BottomsectionComponent,
    NewblanckcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
