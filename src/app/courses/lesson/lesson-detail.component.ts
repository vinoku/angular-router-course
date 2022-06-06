import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonDetail} from '../model/lesson-detail';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson$: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute, private router: Router) {

    console.log('Created LessonDetailComponent...');

  }

  ngOnInit() {
    this.lesson$ = this.route.data.pipe(
      map(data => data['lesson'])
    );
  }

  previous(lesson: LessonDetail) {
    // current ActivatedRoute: http://localhost:4200/courses/angular-router-course/lessons/17
    // parent: http://localhost:4200/courses/angular-router-course
    this.router.navigate(['lessons', lesson.seqNo - 1], { relativeTo: this.route.parent });
  }

  next(lesson: LessonDetail) {
// current ActivatedRoute: http://localhost:4200/courses/angular-router-course/lessons/17
    // parent: http://localhost:4200/courses/angular-router-course
    this.router.navigate(['lessons', lesson.seqNo + 1], { relativeTo: this.route.parent });
  }


}
