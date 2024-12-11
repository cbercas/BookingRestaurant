import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isAuthenticated: boolean = false;

  constructor(private userService:AuthService, private router:Router){

  }

  ngOnInit(): void {
    this.userService.getAuthState().subscribe((user) => {
      if (user) {
        this.isAuthenticated = true; // Usuario autenticado
      } else {
        this.isAuthenticated = false; // Usuario no autenticado
      }
    });
  }

  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/register']);
    })
    .catch(error=>console.log(error))
  }

}
