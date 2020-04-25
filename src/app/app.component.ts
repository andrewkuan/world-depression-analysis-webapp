import { FooterComponent } from './components/main/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Depression 2020s';
}
