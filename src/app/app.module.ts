import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';

import { PostsDataService } from './posts/posts-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
