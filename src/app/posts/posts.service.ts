import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  post: any;
  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get<any>(this.url);
  }

  createPost(post: any) {
    return this.http.post<any>(this.url, JSON.stringify(post));
  }

  updatePost(post: any) {
    return this.http.patch<any>(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(id: any) {
    return this.http.delete<any>(this.url + '/' + id);
  }

}
