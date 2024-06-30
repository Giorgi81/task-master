import {Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

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
    NgOptimizedImage,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchTerm: string = '';
  movies: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  searchMovies() {
    if (this.searchTerm.trim()) {
      this.apiService.get(this.searchTerm).subscribe(
        (data: any) => {
          this.movies = data.results || [];
        },
        (error: any) => {
          console.error('Error fetching movies:', error);
        }
      );
    } else {
      this.movies = [];
    }
  }
}
