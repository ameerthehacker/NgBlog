import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostsDataService {

  posts: Post[] = [
    { title:'A new Flower', 'body': 'This is a sun flower like flower', 'image': 'https://images.pexels.com/photos/61133/pexels-photo-61133.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  },
    { title:'Pencil', 'body': 'This is an awesome pencil I used!', 'image': 'https://images.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  },
    {title:'Pencil', 'body': 'This is an awesome pencil I used!', 'image': 'https://images.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  }
  ];
  public getPosts(){
    return this.posts;
  }

  constructor() { }

}
