import { RouterModule, Route } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HomeComponent } from './home/home.component'
import { POST_ROUTES } from './posts-list/post.routes';

const APP_ROUTES: Route[] = [
    { 'path': '', 'component': HomeComponent },
    { 'path': 'posts', 'component': PostsListComponent, children: POST_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);