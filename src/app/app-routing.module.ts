import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './web/web.component';
import { AppComponent } from './app.component';
import { AppDevComponent } from './app-dev/app-dev.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { PcMaintananceComponent } from './pc-maintanance/pc-maintanance.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:'',
    component: CarouselComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'ourservices',
    component: ServicesComponent
  },
  {
    path: 'webdevsec',
    component: WebComponent
  },
  {
    path: 'appdevsec',
    component: AppDevComponent
  },
  {
    path: 'graphdev',
    component: GraphicsComponent
  },
  {
    path: 'softdevsec',
    component: SoftwareDevComponent
  },
  {
    path: 'pcmaindev',
    component: PcMaintananceComponent
  },
  {
    path: 'digitalmarket',
    component: DigitalMarketingComponent
  },
  {
    path: 'homesecredirect',
    component: CarouselComponent
  }
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule 
{ 

}
