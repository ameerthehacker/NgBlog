import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';

import { PostsDataService } from './posts/posts-data.service';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [PostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
