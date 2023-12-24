import { Component, OnInit } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { HTTPService } from '../../../services/http.service';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-files-table',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  templateUrl: './files-table.component.html',
  styleUrl: './files-table.component.css'
})
export class FilesTableComponent implements OnInit {
  files$!: Observable<any[]>

  constructor(private http: HTTPService) { }

  ngOnInit(): void {
    this.files$ = of([
      {
        size: '2.4 МБ',
        name: 'Пися попа.mp4',
        edited: 'Sun Dec 24 2023 14:45:07 GMT+0400 (Samara Standard Time)'
      },
      {
        size: '1.5 МБ',
        name: 'фывфывфыв.mp4',
        edited: 'Sun Dec 24 2023 14:45:07 GMT+0400 (Samara Standard Time)'
      },
      {
        size: '12.9 МБ',
        name: 'выапваыпваып.mp4',
        edited: 'Sun Dec 24 2023 14:45:07 GMT+0400 (Samara Standard Time)'
      },
      {
        size: '9.1 МБ',
        name: 'чсмисчимсчми.mp4',
        edited: 'Sun Dec 24 2023 14:45:07 GMT+0400 (Samara Standard Time)'
      },
    ])
    // .pipe(delay(2000))
    // this.files$ = this.http.getFiles()
  }
}
