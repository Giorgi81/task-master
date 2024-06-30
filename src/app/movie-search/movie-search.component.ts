import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})

export class MovieSearchComponent {
  searchTerm: string = '';
  movies: any[] = [];
  displayedColumns: string[] = ['title', 'year', 'type'];

  constructor(private apiService: ApiService) {
  }

  searchMovies() {
    if (this.searchTerm.trim()) {
      this.apiService.get(this.searchTerm).subscribe(
        (data: any) => {
          this.movies = data.results || [];
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
