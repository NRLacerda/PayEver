import { Component,Input } from '@angular/core';

@Component({
  selector: 'appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss']
})
export class AppointmentItemComponent {
  @Input() id =0;
  @Input() title ='';
  @Input() description ='';
  @Input() date ='';
  constructor(){
  }
  
}
