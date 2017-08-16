import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';

import { PostsDataService } from './posts/posts-data.service';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NewPostComponent } from './posts/new-post.component';

import { PostsCrudGurad } from './posts/posts-crud.guard';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    PostsListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [PostsDataService, PostsCrudGurad],
  bootstrap: [AppComponent]
})
export class AppModule { }
