import { Component } from '@angular/core';

import { Course } from '../course-form/course.model';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseTableComponent {

  courseList: Course[]|undefined;

  constructor(
    private courseService:CourseService,
    private router:Router){
  }

ngOnInit () {
 this.courseService.GetCourseList()
  .subscribe(courseList => this.courseList = courseList );
}

edit(name:string){
  this.router.navigate(['./course-form',name]);
}
delete(name:string){
  console.log(name);
  this.courseService.DeleteCourseByName(name);
}

}

