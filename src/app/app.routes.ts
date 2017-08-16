import { RouterModule, Route } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component'

const APP_ROUTES: Route[] = [
    { 'path': '', 'component': HomeComponent },
    { 'path': 'posts', 'component': PostsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);