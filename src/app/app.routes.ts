import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import {CurrentMonthCalendarComponent} from "./current-month-calendar/current-month-calendar.component";
import {FormatDateComponent} from "./format-date/format-date.component";
import {MovieSearchComponent} from "./movie-search/movie-search.component";
import {ExpFormsComponent} from "./exp-forms/exp-forms.component";
import {MatchComponent} from "./match/match.component";

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'format-date', component: FormatDateComponent },
  { path: 'current-month-calendar', component: CurrentMonthCalendarComponent },
  { path: 'movie-search', component: MovieSearchComponent },
  {path : 'exp-forms', component: ExpFormsComponent},
  {path: 'match-words', component: MatchComponent}
];


