import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private router:Router){
  }
ngOnInit(){
  let counter = 4000;
  const intervalId = setInterval(function() {
    // Code to be executed repeatedly
    counter++;
  }, 4000); // 1000 milliseconds = 1 second  
  this.router.navigate(['/menu']);
}
}
