import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-section2',
  templateUrl: './home-section2.component.html',
  styleUrls: ['./home-section2.component.css']
})
export class HomeSection2Component {
  constructor(private router: Router) { }

  ourservices()
  {
    this.router.navigate(['/ourservices']);
  }
}
