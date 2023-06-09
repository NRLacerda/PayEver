import { Component,Input } from '@angular/core';

@Component({
  selector: 'appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss']
})
export class AppointmentItemComponent {
  @Input() id : number=0;
  @Input() title : string='';
  @Input() description : string='';
  @Input() date : string='';
  constructor(){
  }
  
}
