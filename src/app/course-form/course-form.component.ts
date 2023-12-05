import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Course } from './course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
 formCourse : FormGroup;
 model: Course;

  constructor(
    private courseService:CourseService,
    private route:ActivatedRoute
    ){
    this.formCourse = new FormGroup({
      name: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    });


    this.route.params.subscribe(params =>{
      let name = params['name'];
          
    if(name){
      courseService.GetCourseByName(name).subscribe(course =>
        {
          if(course){
            this.formCourse.controls['name'].setValue(course.name);
            this.formCourse.controls['type'].setValue(course.type);
            this.formCourse.controls['description'].setValue(course.description);
        }
     })
  }
})
  }

  save(form:FormGroup){
    let model = new Course();
    model.name=form.value.name;
    model.type=form.value.type;
    model.description=form.value.description;
    console.log(model);
    this.courseService.Post(model);
  }



}
