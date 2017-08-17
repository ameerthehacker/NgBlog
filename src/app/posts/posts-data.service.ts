import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostsDataService {

  posts: Post[] = [
    { id: '1',  title:'A new Flower', 'body': 'This is a sun flower like flower', 'image': 'https://images.pexels.com/photos/61133/pexels-photo-61133.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  },
    { id: '2', title:'Pencil', 'body': 'This is an awesome pencil I used!', 'image': 'https://images.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  }
  ];
  public getPosts(){
    return this.posts;
  }
  public getPost(id: string){
    let post:Post = null;
    this.posts.forEach(element => {
      if(element.id == id){
         post = element;
      }
    });
    return post;
  }
  public addPost(post: Post){
    this.posts.push(post);
  }

  constructor() { }

}
