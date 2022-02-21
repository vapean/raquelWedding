import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;
  public activeUrl;
  public islogged: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.activeUrl = event.url
      this.islogged = localStorage.getItem('isLogged') === 'true';

      if (this.islogged && (this.activeUrl === "/" || this.activeUrl === "/login")) {
        this.router.navigate(["/home"])
      }
      
    });




  }

}
