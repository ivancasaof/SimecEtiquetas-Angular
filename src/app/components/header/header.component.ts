import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private loginService: LoginService, private router: Router){}
  sair(){
    this.loginService.autorizado=false
    this.router.navigate(['/login'])
  }
}
