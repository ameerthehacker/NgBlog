import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './posts-data.guard';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms'
import { Post } from './post';
import { PostsDataService } from './posts-data.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styles: []
})
export class NewPostComponent implements OnInit, ComponentCanDeactivate {

  done:boolean = false;

  constructor(private postDataService: PostsDataService) { }

  ngOnInit() {
  }
  canDeactivate(): Observable<boolean> | boolean{
    if(!this.done){
      return confirm('Data will be lost');
    }
    return true;
  }
  onSubmit(form: NgForm){
    this.done = true;  
    let post: Post = {
      id: this.postDataService.getPosts().length.toString(),
      title: form.value.title,
      body: form.value.body,
      image: form.value.image
    }
    this.postDataService.addPost(post);
  }

}
