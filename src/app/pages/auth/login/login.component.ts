import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../../components/header/header.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private userService:AuthService, private router:Router) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit(): void {
   this.userService.login(this.registroForm.value)
   .then(response=>{
    console.log(response)
  }
   )
   .catch(error=> console.log(error))
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(response=>{
      console.log(response)
      this.router.navigate(['/home']);
    })
    .catch(error=>console.log(error));
  }
}
