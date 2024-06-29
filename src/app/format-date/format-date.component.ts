import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {FormatDatePipe} from "./format-date.pipe";

@Component({
  selector: 'app-format-date',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatToolbar,
    FormatDatePipe
  ],
  templateUrl: './format-date.component.html',
  styleUrl: './format-date.component.scss'
})
export class FormatDateComponent {

}
