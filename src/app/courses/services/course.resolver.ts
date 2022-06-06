import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private courses: CoursesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> | Promise<Course> | Course {

    // localhost:4200/courses/<courseUrl>
    const courseUrl = route.paramMap.get('courseUrl');

    return this.courses.loadCourseByUrl(courseUrl);
  }

}
