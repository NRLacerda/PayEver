import { IAppointment } from './../shared/models/appointments.model';
import { Component, OnInit } from '@angular/core';
import { AppointmentModalComponent } from './appointment/appointment.component';
import { MatDialog} from '@angular/material/dialog';
import { NewAppointmentService } from '../shared/services/new-appointment.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  hoursAMPM: string[] = [];
  selectedHour= '';
  appointments: IAppointment[] = [];
  detailsOpen= true;

  constructor(private dialog : MatDialog, private Appointments: NewAppointmentService ){
    this.generateHoursAMPM();
  }

  ngOnInit():void{
    this.appointments = this.Appointments.getAllAppointments();
  }

  openNewAppointment(enterAnimationDuration: string, exitAnimationDuration: string, date:string): void {
      const dialogConfig = {
        width: '50rem',
        data: {
          enterAnimationDuration,
          exitAnimationDuration,
          date
        },
      }
    this.dialog.open(AppointmentModalComponent, dialogConfig);
  }

  async deleteAppointment(id:number){
    await this.Appointments.removeAppointmentById(id)
    this.appointments = this.Appointments.getAllAppointments();
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
    console.log(this.selectedHour)
    this.openNewAppointment('0ms', '0ms',hour);
  }

  openDetails(){
  this.detailsOpen = !this.detailsOpen;
  }
 
  isHourSelected(hour: string) {
    
    return this.selectedHour === hour;
  }
}