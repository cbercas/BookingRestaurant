import { Component, Input, OnInit } from '@angular/core';
import { Booking, BookingStatus } from '../../../models/booking.model';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-booking-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-resume.component.html',
  styleUrl: './booking-resume.component.css'
})
export class BookingResumeComponent implements OnInit{


  bookings: Booking[] = [];

  constructor(private bookingService : BookingService){}

  ngOnInit(): void {
    this.bookings = this.bookingService.getAllBooking()
  }

  eliminarReserva(id: number) {
    this.bookingService.delete(id)
   }

}
