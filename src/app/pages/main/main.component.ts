import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesTableComponent } from "./files-table/files-table.component";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, FilesTableComponent]
})
export class MainComponent  {

}
