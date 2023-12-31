import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesServiceService } from './course/courses-service.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { FormsModule } from '@angular/forms';
import { ZippyComponent } from './zippy/zippy.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [CoursesServiceService, AuthorService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }