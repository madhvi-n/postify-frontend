import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { PostCardComponent } from './post-card/post-card.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export function createApollo(httpLink: HttpLink) {
  const uri = 'http://localhost:8000/graphql/';
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostCardComponent,
    CreatePostComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { Component, OnInit } from '@angular/core';
// import { PostService } from '@app/core/services/post/post.service';
// import { Post } from '@app/core/models/post';
//
// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.scss']
// })
// export class PostComponent {
//   posts: Post[];
//
//   constructor(private postService: PostService) {}
//
//   ngOnInit(): void {
//     this.postService.getPosts().subscribe(
//       (result: Post[]) => {
//         this.posts = result;
//         console.log(this.posts);
//       });
//   }
// }
