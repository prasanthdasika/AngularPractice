import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }

  constructor(private service: PostsService) {

  }

  createPost(title: HTMLInputElement) {
    let post: any = { title: title.value };
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.id;
      this.posts.splice(0, 0, post);
    }, (error: Response) => {
      if (error.status == 404)
        alert("404 error occurred");
      else
        alert("An unexpected error occurred");
      console.log(error);
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    }, (error: Response) => {
      if (error.status == 404)
        alert("404 error occurred");
      else
        alert("An unexpected error occurred");
      console.log(error);
    });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: Response) => {
      if (error.status == 404)
        alert("404 error occurred");
      else
        alert("An unexpected error occurred");
      console.log(error);
    });
  }
}
