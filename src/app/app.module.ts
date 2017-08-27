import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';

import { PostsDataService } from './posts/posts-data.service';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NewPostComponent } from './posts/new-post.component';

import { PostsCrudGurad } from './posts/posts-crud.guard';
import { PostDataGuard } from './posts/posts-data.guard';


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
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostsDataService, PostsCrudGurad, PostDataGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
