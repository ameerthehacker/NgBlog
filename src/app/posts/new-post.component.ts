import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './posts-data.guard';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styles: []
})
export class NewPostComponent implements OnInit, ComponentCanDeactivate {

  done:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  canDeactivate(): Observable<boolean> | boolean{
    if(!this.done){
      return confirm('Data will be lost');
    }
    return true;
  }

}
