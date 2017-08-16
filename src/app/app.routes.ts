import { RouterModule, Route } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HomeComponent } from './home/home.component'
import { POST_ROUTES } from './posts-list/post.routes';
import { Routes } from '@angular/router';

const APP_ROUTES:Routes = [
    { 'path': '', 'component': HomeComponent },
    { 'path': 'posts', 'component': PostsListComponent, children: POST_ROUTES },
    { 'path': '**', redirectTo:'/' }    
];

export const routing = RouterModule.forRoot(APP_ROUTES);