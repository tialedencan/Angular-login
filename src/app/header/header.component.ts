import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router}from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router:Router,
    private authService: AuthService
  ){}
  logout(){
    this.authService.logout();
  }
}
