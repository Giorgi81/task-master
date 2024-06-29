import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-current-month-calendar',
  templateUrl: './current-month-calendar.component.html',
  styleUrls: ['./current-month-calendar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule]
})
export class CurrentMonthCalendarComponent implements OnInit {
  weeks: { day: number, weekend: boolean }[][] = [];
  currentDay: number = new Date().getDate();
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {
    console.log(`Current Day: ${this.currentDay}`);
    console.log(`Current Month: ${this.currentMonth}`);
    console.log(`Current Year: ${this.currentYear}`);
    this.generateCalendar();
  }

  generateCalendar(): void {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const weeks: { day: number, weekend: boolean }[][] = [];
    let week: { day: number, weekend: boolean }[] = [];
    let dayCounter = 1;
    let dayOfWeek = firstDayOfMonth;

    // Fill the first week with leading empty days
    for (let i = 0; i < firstDayOfMonth; i++) {
      week.push({ day: 0, weekend: false });
    }

    // Fill the days of the month
    while (dayCounter <= daysInMonth) {
      week.push({ day: dayCounter, weekend: dayOfWeek === 0 || dayOfWeek === 6 });
      dayCounter++;
      dayOfWeek++;

      if (dayOfWeek === 7) {
        weeks.push(week);
        week = [];
        dayOfWeek = 0;
      }
    }

    // Fill the last week with trailing empty days
    if (week.length > 0) {
      while (week.length < 7) {
        week.push({ day: 0, weekend: false });
      }
      weeks.push(week);
    }

    this.weeks = weeks;
    console.log(this.weeks);
  }
}
