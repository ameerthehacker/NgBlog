import { Component, OnInit } from '@angular/core';
import { Post  } from './post';
import { PostsDataService } from './posts-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  clickedPost=false;
  posts: Post[];

  constructor(private postsDataService: PostsDataService) { }

  ngOnInit() {
    this.posts = this.postsDataService.getPosts();
  }

  postClicked(evt){
    this.clickedPost = evt;
  }

}
