import { Component, Input } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  ratingVal:number = 4;
  @Input() course= "../../../assets/css video thumbnail 1.png"
ratingChanged($event: CustomEvent<number>) {
  this.ratingVal = 4;
}

}
