import { Injectable } from '@angular/core';
import { Course } from '../course-form/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  host : string = "https://localhost:7274";

  Post(course: Course){
    return this.http.post(`${this.host}/course-form`,course).subscribe();
  }

  //returns all courses
  GetCourseList():Observable<Course[]>{
    console.log(`{host}/course`);
    return this.http.get<Course[]>(`${this.host}/course`);
  }
  
 // GetCoursebyId():Course{
 //   return this.http.get(this.url,Course.id);
  //}

  GetCourseByName(name:string):Observable<Course>{
    //console.log(`{host}/course/GetByName?name=${name}`);
    return this.http.get<Course>(`${this.host}/course/GetByName?name=${name}`);
  }
  DeleteCourseByName(name:string){
    return this.http.delete(`${this.host}/course/DeleteCourseByName?name=${name}`);
  }
}
