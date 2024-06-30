import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NgForOf, NgIf} from "@angular/common";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Company } from "./type";
import {MatNativeDateModule} from '@angular/material/core';

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
  jobForm: FormGroup;
  positionForm: FormGroup;
  addJob = false;
  addPosition = false;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      companyName: ['', Validators.required],
      companyWeb: ['', Validators.required],
      companyDesc: ['']
    });

    this.positionForm = this.fb.group({
      posName: ['', Validators.required],
      posLevel: ['', Validators.required],
      posDesc: [''],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

  add() {
    this.addJob = true;
  }

  addPos() {
    this.addPosition = true;
  }

  addPost() {
    if (this.positionForm.valid) {
      this.arr.push({
        name: this.jobForm.value.companyName,
        url: this.jobForm.value.companyWeb,
        desc: this.jobForm.value.companyDesc,
        posName: this.positionForm.value.posName,
        posLevel: this.positionForm.value.posLevel,
        posDesc: this.positionForm.value.posDesc,
        dateFrom: this.positionForm.value.fromDate,
        dateTo: this.positionForm.value.toDate
      });

      this.jobForm.reset();
      this.positionForm.reset();
      this.addJob = false;
      this.addPosition = false;
    }
  }

  deleteJob(index: number) {
    this.arr.splice(index, 1);
  }
}
