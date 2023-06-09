import { IAppointment } from './../models/appointments.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewAppointmentService {
  protected Appointments:IAppointment[]=[
    {
      "id":0,
      "title":"teste",
      "description":"teste descipr",
      "date":"teste data"
    },
    {
      "id":1,
      "title":"teste2",
      "description":"teste descipr",
      "date":"teste data"
    },
    {
      "id":2,
      "title":"teste3",
      "description":"teste descipr",
      "date":"teste data"
    }
  ]

  constructor() { }
  submitAppointment(id:number,title:string, description:string, date:string){
    var newId:number = this.getLastId()
    newId++
    var newAppointment={
      "id":newId,
      "title":title,
      "description":description,
      "date":date
    }
    this.Appointments.push(newAppointment);
    console.log(this.Appointments)
    //this.searchAppointmentById(id)
  }

  getLastId(): number {
    const lastId = this.Appointments.reduce((maxId, appointment) => {
      return appointment.id > maxId ? appointment.id : maxId;
    }, -1);
    return lastId;
  }

  async removeAppointmentById(id: number): Promise<void> {
    console.log(this.Appointments)
    this.Appointments = this.Appointments.filter(appointment => appointment.id !== id);
    console.log(this.Appointments)
  }

  getAppointmentById(id: number): IAppointment |undefined {
    const appointment = this.Appointments.find(app => app.id === id);
    return appointment ;
  }
  
  getAllAppointments():IAppointment[]{
    return this.Appointments;
  }
}
