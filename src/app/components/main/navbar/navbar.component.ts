import { Component} from '@angular/core';

import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  appUser: User;

  constructor(public auth : AuthService) {}

  logout(){
    this.auth.SignOut();
  }

}
