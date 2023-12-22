import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalSearchComponent } from './modal-search/modal-search.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ModalSearchComponent]
})
export class HeaderComponent {
  public isModalOpen = false

  constructor(private router: Router) { }

  routeTo(path: string) {
    this.router.navigate([path])
  }

  openModal() {
    this.isModalOpen = true
  }

  setModal(newValue: boolean) {
    this.isModalOpen = newValue
  }
}
