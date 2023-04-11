import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router}from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string ='';
  

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  login(){
    if(this.username.trim().length===0)  {
      this.errorMessage = 'Username is required';

    }else if (this.password.trim().length ===0){
      this.errorMessage = 'Password is required';
    }
    else{
      this.errorMessage ='';
      let result = this.authService.login(this.username,this.password);
      if(result === 200){
        this.router.navigate(['/home']);
      }else {
        this.errorMessage = 'Invalid Credentials';
      }
    }
  }
}
