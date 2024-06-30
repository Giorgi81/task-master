import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, JsonPipe, MovieSearchComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task';
  api = inject(ApiService);
  res!: Observable<any>;

  ngOnInit() {
    this.res = this.api.get('man');
  }
}
