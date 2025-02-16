import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd, RouterLink} from '@angular/router';
import { filter } from 'rxjs/operators';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    NgClass
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';
  isSidebarActive: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
      });

    this.currentRoute = this.router.url;
  }

  navbarToggle() {
    if (window.innerWidth <= 1024) {
      this.isSidebarActive = !this.isSidebarActive;
    }
  }
}
