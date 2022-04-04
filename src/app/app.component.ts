import { Component } from '@angular/core';
import { LoginService } from 'services/login.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'library-management';
  login = this.loginService.login;
  constructor(private loginService: LoginService) { }
}
