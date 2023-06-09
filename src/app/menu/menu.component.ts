import { IAppointment } from './../shared/models/appointments.model';
import { Component, OnInit } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewAppointmentService } from '../shared/services/new-appointment.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  hoursAMPM: string[] = [];
  selectedHour: string = '';
  appointments: IAppointment[] = [];



  constructor(private dialog : MatDialog, private Appointments: NewAppointmentService ){
    this.generateHoursAMPM();
  }
  ngOnInit():void{
    this.appointments = this.Appointments.getAllAppointments();
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
  deleteAppointment(){
    
  }
  generateHoursAMPM() {
    for (let i = 0; i < 24; i++) {
      const hour = i % 12 || 12;
      const suffix = i < 12 ? 'AM' : 'PM';
      this.hoursAMPM.push(hour+":00" + ' ' + suffix);
    }
  }
  selectHour(hour: string) {
    this.selectedHour = hour;

    this.openNewAppointment('0ms', '0ms',hour);

  }

  convertTo24HourFormat(time: string): string {
    const [inputTime, meridiem] = time.split(' ');
  
    let [hours, minutes] = inputTime.split(':');
  
    if (meridiem.toLowerCase() === 'pm') {
      hours = String(Number(hours) + 12);
    } else if (meridiem.toLowerCase() === 'am' && hours === '12') {
      hours = '00';
    }
  
    return `${hours}:${minutes}`;
  }
  
  isHourSelected(hour: string) {
    
    return this.selectedHour === hour;
  }
}
