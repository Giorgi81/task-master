import {Component, OnInit} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  standalone: true,
  imports: [
    MatFormField
  ],
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit{
  ngOnInit() {

    const name = 'ხე';
    const names = ['ხე', 'ხეს', 'ცდ'];
    let matchedIndexes = [];
    let index;
    let indexesByNameLength : any[] = []

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
      const matched = i.filter(a => a !== -1).length;
      const percent = (matched / i.length) * 100 + '%'
      percents.push(percent)
    }

    console.log(percents);
  }

}
