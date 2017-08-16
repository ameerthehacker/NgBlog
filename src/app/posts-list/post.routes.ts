import { PostsComponent } from '../posts/posts.component';
import { NewPostComponent } from '../posts/new-post.component';

export const POST_ROUTES = [
    { 'path': '', 'component': PostsComponent },    
    { 'path': 'new', 'component': NewPostComponent},    
    { 'path': ':id', 'component': PostsComponent}
]