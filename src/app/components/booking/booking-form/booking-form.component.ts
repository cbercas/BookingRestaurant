import { BookingService } from './../../../services/booking.service';
import { Component } from '@angular/core';
import { Booking, BookingStatus } from '../../../models/booking.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {

  newBooking : Booking | null = null;
  registroForm:FormGroup;
  booking: Booking | null = null;
  editingId: number = -1;

 constructor(private bookingService: BookingService, formBuilder: FormBuilder, private route:ActivatedRoute){
  this.registroForm = formBuilder.group({
    'client': ['', [Validators.required, Validators.max(50)]],
    'phone': ['', [Validators.required]],
    'email': ['', [Validators.required,]],
    'persons' : ['',[Validators.min(1),Validators.max(50)]],
    'notes':['',[Validators.maxLength(250)]],
    'date':['',Validators.required]
  });
 }


 onSubmit() {
  if (this.registroForm.valid) {
    const bookingData = this.registroForm.value;




  }

 }
}
