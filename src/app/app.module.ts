import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesServiceService } from './course/courses-service.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    FavoriteComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CoursesServiceService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }