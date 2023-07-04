import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-section4',
  templateUrl: './home-section4.component.html',
  styleUrls: ['./home-section4.component.css']
})
export class HomeSection4Component {
  
  constructor(private router: Router) { }
  aboutus()
 {
  this.router.navigate(['/aboutus']);
  console.log("Hello");
  
 }
}
