import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LessonDetail} from '../model/lesson-detail';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private courses: CoursesService) {
  }

  // http://localhost:4200/courses/angular-router-course/lessons/17

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> {

    const courseUrl = route.parent.paramMap.get('courseUrl');
    const lessonSeqNo = route.paramMap.get('lessonSeqNo');

    return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
  }

}
