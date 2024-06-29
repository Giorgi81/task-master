import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NgForOf, NgIf} from "@angular/common";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Company } from "./type";
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-exp-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgIf,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgForOf,
  ],

  templateUrl: './exp-forms.component.html',
  styleUrl: './exp-forms.component.scss'
})
export class ExpFormsComponent {

  arr: Company[] = [];

  addPost () {
    this.arr.push({
      name: this.applicationInfo.companyName,
      url: this.applicationInfo.companyUrl,
      desc: this.applicationInfo.companyDesc,
      posName: this.applicationInfo.posName,
      posLevel: this.applicationInfo.posLevel,
      posDesc: this.applicationInfo.posDesc,
      dateFrom : this.applicationInfo.fromDate,
      dateTo: this.applicationInfo.toDate

    })

  }

applicationInfo = {
    companyName : '',
  companyUrl : '',
  companyDesc : '',
  posName : '',
  posLevel : '',
  posDesc : '',
  fromDate: '',
  toDate: ''


}




  addJob : boolean = false
  addPosition : boolean = false



  add () {
    this.addJob = true

  }

  addPos () {
    this.addPosition = true

  }

  constructor(private fb: FormBuilder) {}


  jobForm = this.fb.group({
    companyName : '',
    companyWeb : '',
    companyDesc : ''
  })
}

