import { IAppointment } from './../models/appointments.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewAppointmentService {
  protected Appointments:IAppointment[]=[
    {
      "title":"teste",
      "description":"teste descipr",
      "date":"teste data"
    },
    {
      "title":"teste2",
      "description":"teste descipr",
      "date":"teste data"
    },
    {
      "title":"teste3",
      "description":"teste descipr",
      "date":"teste data"
    }
  ]

  constructor() { }
  submitAppointment(title:string, description:string, date:string){
    console.log(title,description,"Hora " + date)
    var newAppointment={
      "title":title,
      "description":description,
      "date":date
    }
    this.Appointments.push(newAppointment);
    console.log(this.Appointments)
  }
}
