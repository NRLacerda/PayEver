import { Component } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  hoursAMPM: string[] = [];
  selectedHour: string = '';



  constructor(private dialog : MatDialog){
    this.generateHoursAMPM();
  }
  openNewAppointment(enterAnimationDuration: string, exitAnimationDuration: string, date:string): void {
      const dialogConfig = {
        width: '500px',
        data: {
          enterAnimationDuration,
          exitAnimationDuration,
          date
        },
      }
    this.dialog.open(AppointmentComponent, dialogConfig);
  }
  teste(teste:Date|null){
    console.log(teste)
  }
  generateHoursAMPM() {
    for (let i = 0; i < 24; i++) {
      const hour = i % 12 || 12;
      const suffix = i < 12 ? 'AM' : 'PM';
      this.hoursAMPM.push(hour + ' ' + suffix);
    }
  }
  selectHour(hour: string) {
    console.log(hour)
    this.selectedHour = hour;
    this.openNewAppointment('0ms', '0ms',hour);

  }
  isHourSelected(hour: string) {
    
    return this.selectedHour === hour;
  }
}
