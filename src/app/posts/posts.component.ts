import { Component, OnInit } from '@angular/core';
import { Post  } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  posts: Post[] = [
    { title:'A new Flower', 'body': 'This is a sun flower like flower', 'image': 'https://images.pexels.com/photos/61133/pexels-photo-61133.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  },
    { title:'Pencil', 'body': 'This is an awesome pencil I used!', 'image': 'https://images.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  },
    {title:'Pencil', 'body': 'This is an awesome pencil I used!', 'image': 'https://images.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  }
  ];
  clickedPost=false;

  constructor() { }

  ngOnInit() {
  }

  postClicked(evt){
    this.clickedPost = evt;
  }

}
