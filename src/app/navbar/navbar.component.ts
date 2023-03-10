import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor (private route: ActivatedRoute) {}
  
  isActive(path: string): boolean {
    return this.route.snapshot.url.toString() === path;
  }
}
