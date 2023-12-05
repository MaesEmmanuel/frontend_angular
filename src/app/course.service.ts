import { Injectable } from '@angular/core';
import { Course } from './course-form/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  url : string = "https://localhost:7037/course";

  Post(course: Course){
    return this.http.post(this.url,course).subscribe();
  }

  GetCourseList():Observable<Course[]>{
    return this.http.get<Course[]>(this.url);
  }

 // GetCoursebyId():Course{
 //   return this.http.get(this.url,Course.id);
  //}

  GetCourseByName(name:string){
    return this.http.get<Course>(`${this.url}/GetCourseByName?name=${name}`);
  }
}
