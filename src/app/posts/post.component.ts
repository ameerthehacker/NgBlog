import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {

  @Input('post')
  private post: Post;
  @Output('postClicked')
  private clicked = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  postClicked(evt){
    evt.preventDefault();
    this.clicked.emit(this.post);
  }

}
