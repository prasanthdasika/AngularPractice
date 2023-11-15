import { Component } from '@angular/core';
import { CoursesServiceService } from './courses-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  courses;
  constructor(courseService: CoursesServiceService) {
    this.courses = courseService.getCourses();
  }
}

