import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DropdownComponent
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() values!: any[]
  @Input() placeholder: string = 'Placeholder'
  @Input() optionLabel: string | null = null
  onChange = (value: any) => { }
  onTouched = () => { };
  disabled = false
  touched = false
  isValuesOpen = false
  currentValue: any = null

  toggleIsValueOpen() {
    this.isValuesOpen = !this.isValuesOpen
  }

  changeValue(newValue: any) {
    this.markAsTouched()
    this.currentValue = newValue
    this.onChange(this.currentValue)
    this.isValuesOpen = false
  }

  clearValue() {
    this.currentValue = null
  }

  writeValue(value: any): void {
    this.currentValue = value
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
