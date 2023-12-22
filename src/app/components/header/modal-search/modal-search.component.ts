import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from '../../../custom-tags/dropdown/dropdown.component';

@Component({
  selector: 'app-modal-search',
  standalone: true,
  templateUrl: './modal-search.component.html',
  styleUrl: './modal-search.component.css',
  imports: [ReactiveFormsModule, DropdownModule, DropdownComponent]
})
export class ModalSearchComponent implements OnInit {
  @Output() onModalChange: EventEmitter<boolean> = new EventEmitter()
  public searchText = new FormControl('')
  public isFilterOpen = false
  public types: string[] = ['Видео', 'Фото', 'Музыка', 'Текст']
  public fileSizes: string[] = ['1', '2', '3', '4', '5', '6', '7'].map(el => el + ' Мб')
  public items = [1, 1, 1, 1, 1]
  public filterForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      type: new FormControl(),
      fileName: new FormControl(),
      fileSize: new FormControl(),
    })

    this.filterForm.valueChanges.subscribe((item) => {
      console.log(item)
    })
  }

  closeModal() {
    this.onModalChange.emit(false)
  }

  toggleFilter() {
    console.log(this.filterForm.value)
    this.isFilterOpen = !this.isFilterOpen
  }

  findBySearch(event: Event) {
    event.preventDefault()
    console.log(this.searchText.value)
  }
}
