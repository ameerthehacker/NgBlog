import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './posts-data.guard';
import { Observable } from 'rxjs/Rx';
import { NgForm, FormGroup, FormArray, FormControl, Validators } from '@angular/forms'
import { Post } from './post';
import { PostsDataService } from './posts-data.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styles: [
    ".error { color: red; font-size: x-small }"
  ]
})
export class NewPostComponent implements OnInit, ComponentCanDeactivate {
  
  done:boolean = false;
  myForm: FormGroup;
  
  ngOnInit() {
    this.myForm = new FormGroup({
      'title': new FormControl('New Title', [Validators.required, Validators.minLength(10), this.titleValidator]),
      'body': new FormControl('New Content', Validators.required),      
      'image': new FormControl('Empty Image', Validators.required),
      'tags': new FormArray([
        new FormControl('', Validators.required)
      ])
    });
  }

  constructor(private postDataService: PostsDataService) { }
  
  get tags() {
    return (<FormArray>this.myForm.get('tags'));
  
  }
  onAddTag(){
    this.tags.push(new FormControl('', Validators.required))
  }
  canDeactivate(): Observable<boolean> | boolean{
    if(!this.done){
      return confirm('Data will be lost');
    }
    return true;
  }
  onSubmit(){
    let newPost: Post = {
      id: '5',
      title: this.myForm.value.title,
      body: this.myForm.value.body,
      image: this.myForm.value.image,
      tags: this.myForm.value.tags
    };
    this.postDataService.addPost(newPost);
    this.done = true;
  }
  // Custom validator
  titleValidator(control: FormControl){
    if(control.value == 'test'){
      return { error: true };
    }
    else{
      return null;
    }
  }
}
