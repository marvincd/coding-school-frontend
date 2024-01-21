import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card-profile',
  templateUrl: './course-card-profile.component.html',
  styleUrls: ['./course-card-profile.component.scss']
})
export class CourseCardProfileComponent {
  @Input()  title = '';
}
