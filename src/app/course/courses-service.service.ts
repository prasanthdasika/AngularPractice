import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  constructor() { }
  getCourses() {
    return ["Course1", "Course2", "Course3", "Course4"];
  }
}
