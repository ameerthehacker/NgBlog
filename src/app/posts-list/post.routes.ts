import { PostsComponent } from '../posts/posts.component';
import { NewPostComponent } from '../posts/new-post.component';
import { PostsCrudGurad } from '../posts/posts-crud.guard';
import { Routes } from '@angular/router';

export const POST_ROUTES: Routes = [
    { 'path': '', 'component': PostsComponent },    
    { 'path': 'new', 'component': NewPostComponent, canActivate: [PostsCrudGurad] },    
    { 'path': ':id', 'component': PostsComponent }
]