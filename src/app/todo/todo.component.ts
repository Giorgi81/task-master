import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {FormBuilder, FormArray, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      tasks: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    });
  }

  get tasks() {
    return this.todoForm.get('tasks') as FormArray;
  }

  addTask() {
    this.tasks.push(this.fb.control('', Validators.required));
  }

  removeTask(index: number) {
    this.tasks.removeAt(index);
  }

  onSubmit() {
    if (this.todoForm.valid) {
      console.log('To-Do List:', this.todoForm.value);
    }
  }

}
