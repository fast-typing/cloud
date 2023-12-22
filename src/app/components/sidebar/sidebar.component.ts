import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  public currentUrl: string = '/'

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((obj: any) => {
      this.currentUrl = obj.url
      console.log(obj)
    })
  }

  routeTo(path: string) {
    this.router.navigate([path])
  }

  isNowUrl(url: string): boolean {
    return this.currentUrl === url
  }
}
