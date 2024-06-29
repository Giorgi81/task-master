import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, JsonPipe],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'task';
  api = inject(ApiService);
  res!: Observable<any>

  ngOnInit() {
    this.res = this.api.get('man');
  }
}
