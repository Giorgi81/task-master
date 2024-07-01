import {Component, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatFormFieldModule,
    MatButton,
    ReactiveFormsModule
  ],
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  wordsFormControl: FormControl = new FormControl('');
  wordFormControl: FormControl = new FormControl('');
  words: string[] = [];
  percents: string[] = [];

  ngOnInit() {
    this.wordsFormControl.valueChanges.subscribe(_ => {
      this.words = _.split(',');
      this.words = this.words.map(_ => _.trim());
    })
  }

  public matchWithPercent(): void {
    const name: string = this.wordFormControl.value;
    const names: string[] = this.words;
    let matchedIndexes: any[] = [];
    let index;
    let indexesByNameLength: any[] = []

    for (let i = 0; i < names.length; i++) {
      matchedIndexes.push(indexesByNameLength);

      for (let j = 0; j < names[i].length; j++) {

        index = name.indexOf(names[i][j]);

        indexesByNameLength.push(index);
      }
      indexesByNameLength = [];
    }

    let percents = [];
    for (let i of matchedIndexes) {
      const matched = i.filter((a: any) => a !== -1).length;
      const percent = (matched / i.length) * 100 + '%'
      percents.push(percent)
    }
    this.percents = percents
  }

}
