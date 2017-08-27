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
    return (<FormArray>this.myForm.get('tags')).controls;
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
    console.log(this.myForm);
  }
  titleValidator(control: FormControl){
    if(control.value == 'test'){
      return { error: true };
    }
    else{
      return null;
    }
  }
}
