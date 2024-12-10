import { bootstrapApplication } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Booking, BookingStatus } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  private bookings : Booking [] =
  [new Booking( 1, "Juan Pérez", "+34 600 123 456", "juan.perez@example.com", 4, "Prefiere mesa cerca de la ventana.",
  new  Date("2024-12-15T20:00:00"), new Date("2024-12-01T10:30:00"),BookingStatus.PENDING),
   new Booking( 2, "Ana Gómez", "+34 600 654 321", "ana.gomez@example.com", 2, "Celebración de aniversario.",
   new
  Date("2024-12-16T19:00:00"), new Date("2024-12-01T11:00:00"),BookingStatus.CONFIRM ),
  new Booking( 3, "Carlos López", "+34 600 789 012", "carlos.lopez@example.com", 6, "Requiere menú vegetariano.", new
    Date("2024-12-20T21:00:00"), new Date("2024-12-01T15:45:00"),BookingStatus.PENDING ),
     new Booking( 4, "María Fernández", "+34 600 345 678", "maria.fernandez@example.com", 3, "Traerá un pastel de cumpleaños.", new Date("2024-12-22T18:30:00"), new Date("2024-12-02T09:15:00"),BookingStatus.PENDING ),
     new Booking( 5, "Luis Martínez", "+34 600 567 890", "luis.martinez@example.com", 5, "Mesa en zona tranquila.", new
    Date("2024-12-18T20:00:00"), new Date("2024-12-02T14:00:00"),BookingStatus.PENDING ),
     new Booking( 6, "Isabel Morales", "+34 600 901 234", "isabel.morales@example.com", 2, "Alérgica a los frutos secos.",
    new Date("2024-12-17T19:30:00"), new Date("2024-12-01T16:20:00"),BookingStatus.CONFIRM ),
     new Booking( 7, "Miguel Torres", "+34 600 112 233", "miguel.torres@example.com", 8, "Celebración de cena de empresa.",
    new Date("2024-12-25T22:00:00"), new Date("2024-12-03T09:50:00"),BookingStatus.PENDING ),

    new Booking( 8, "Sofía Ramírez", "+34 600 223 344", "sofia.ramirez@example.com", 4, "Traerá decoración navideña.",

      new Date("2024-12-24T21:00:00"), new Date("2024-12-02T13:10:00"),BookingStatus.CONFIRM ),

    new Booking( 9, "Pablo Vega", "+34 600 334 455", "pablo.vega@example.com", 3, "Desea silla para bebé.", new
    Date("2024-12-26T18:45:00"), new Date("2024-12-01T17:30:00"),BookingStatus.PENDING ),

    new Booking( 10, "Elena Ruiz", "+34 600 445 566", "elena.ruiz@example.com", 6, "Mesa con buena iluminación para fotos.", new Date("2024-12-28T20:30:00"), new Date("2024-12-03T12:40:00"),BookingStatus.CONFIRM )
    ]

    getAllBooking(){
      return this.bookings
    }

    delete(id:number){
      for (let i = 0; i < this.bookings.length; i++) {
        if(id == this.bookings[i].id) {
          this.bookings.splice(i,1)
        }
      }
    }

    addBookingPerson(client:string, phone: string, email:string, persons:number,
      notes:string, date:Date): Booking {

      const newId = this.bookings.length ? Math.max(...this.bookings.map(booking => booking.id)) + 1 : 1;

      // Crear una nueva reserva
      const newBooking = new Booking(newId,client,phone,email,persons,notes,date,new Date(),BookingStatus.PENDING);

      // Agregar la nueva reserva al array
      this.bookings.push(newBooking);

      return newBooking;  // Retornamos la nueva reserva
    }


  getBookingById(id: number): Booking|null {
    for (let i = 0; i < this.bookings.length; i++) {
      if(id == this.bookings[i].id) {
        return this.bookings[i]
      }
    }
    return null;
  }

  editar(booking : Booking){
    for (let i = 0; i < this.bookings.length; i++) {
      if(booking.id == this.bookings[i].id) {
        this.bookings[i].client = booking.client
        this.bookings[i].phone = booking.phone
        this.bookings[i].email = booking.email
        this.bookings[i].persons =booking.persons
        this.bookings[i].notes = booking.notes
        this.bookings[i].date = booking.date
        this.bookings[i].dateCreation = booking.dateCreation
        this.bookings[i].status = booking.status
      }
    }
  }

}
