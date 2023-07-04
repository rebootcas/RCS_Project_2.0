import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  
  constructor(private router: Router) { }
  webdevsec()
  {
    this.router.navigate(['/webdevsec']);
  }
  appdevsec()
  {
    this.router.navigate(['/appdevsec']);
  }
  graphdev()
  {
    this.router.navigate(['/graphdev']);
  }
  softdevsec()
  {
    this.router.navigate(['/softdevsec']);
  }
  pcmaindev()
  {
    this.router.navigate(['/pcmaindev']);
  }
  digitalmarket()
  {
    this.router.navigate(['/digitalmarket']);
  }

}
