import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post  } from './post';
import { PostsDataService } from './posts-data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  clickedPost:Post = null;
  posts: Post[];
  routeSubscription: Subscription;

  constructor(private postsDataService: PostsDataService, private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.posts = this.postsDataService.getPosts();
    this.routeSubscription = this.currentRoute.params.subscribe( param => { 
      if(param['id'] != undefined){
        this.clickedPost = this.postsDataService.getPost(param['id']);
      }
    });    
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }

}
