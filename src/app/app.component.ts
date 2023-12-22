import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, RouterModule, SidebarComponent]
})
export class AppComponent {
  title = 'cloud';
}
