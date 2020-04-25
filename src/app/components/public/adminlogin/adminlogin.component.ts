import { Component, OnInit } from  '@angular/core';
import { AuthService } from  '../../../services/auth/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {}

  login(email, password){
    this.auth.SignIn(email, password);
  }
}
