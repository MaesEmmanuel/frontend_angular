import { Injectable } from '@angular/core';
import { Course } from './course-form/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  Post(course: Course){
    return this.http.post("https://localhost:7037/course",course).subscribe();
  }

  GetCourseList():Observable<Course[]>{
    return this.http.get<Course[]>("https://localhost:7037/course");
  }

 // GetCoursebyId():Course{
 //   return this.http.get("https://localhost:7037/course",Course.id);
  //}

  GetCourseByName(name:string){
    return this.http.get<Course>(`https://localhost:7037/course/GetCourseByName?name=${name}`);
  }
}
