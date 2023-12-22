import { Component, OnInit } from '@angular/core';
import { FileComponent } from "./file/file.component";
import { HTTPService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [FileComponent, CommonModule],
})
export class MainComponent implements OnInit {
  files$!: Observable<any[]>

  constructor(private http: HTTPService) { }

  ngOnInit(): void {
    this.files$ = this.http.getFiles()
  }
}
