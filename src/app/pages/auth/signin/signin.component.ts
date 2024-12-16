import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,HeaderComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  registroForm:FormGroup;

  constructor(private userService: AuthService, formBuilder: FormBuilder, private route:ActivatedRoute, private router:Router){
    this.registroForm = formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password' : ['', [Validators.required, Validators.minLength(6)]],
    });
  //  this.registroForm = new FormGroup({
   //   email:new FormControl(),
   //   password: new FormControl()
//})
  }

  onSubmit(){
    this.userService.register(this.registroForm.value)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/login'])
    })
    .catch(error=>console.log(error));
  }

}
