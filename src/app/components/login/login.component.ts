import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup
  user! : string
  password! : string
  liberado : Boolean = false
  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(){
    this.loginform = new FormGroup({
      usuario : new FormControl('', [Validators.required]),
      senha : new FormControl('', [Validators.required]),
    })
  }
  get usuario(){
    return this.loginform.get('usuario')
  }

  get senha(){
    return this.loginform.get('senha')
  }

  submit(){
    if(this.loginform.invalid){
      return
    }
    this.user = this.loginform.value['usuario']
    this.password =  this.loginform.value['senha']
    this.loginService.login(this.user, this.password).subscribe((retorno)=>(
      this.loginService.esta_autorizado(this.liberado=true),
      this.router.navigate(['/'])

    ), error =>(
      console.log(error.status, 'Acesso negado')))
  }
}
