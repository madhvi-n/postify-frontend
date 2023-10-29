import { Injectable } from '@angular/core';
import { GraphqlService } from '../graphql/graphql.service';
import { GET_POSTS_QUERY, CREATE_POST_MUTATION } from '../../graphql-queries/posts.queries';
import { Post, PostCreateUpdateInput } from '../../models/post';
import { Observable } from 'rxjs';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private queryRef: QueryRef<any>;

  constructor(private apollo: Apollo) {
    this.queryRef = this.apollo.watchQuery<any>({
      query: GET_POSTS_QUERY
    });
  }

  getPosts(): Observable<Post[]> {
    this.queryRef.refetch();
    return this.queryRef.valueChanges.pipe(
      map((result: any) => result.data.posts)
    );
  }

  createPost(input: PostCreateUpdateInput): Observable<Post> {
    return this.apollo.mutate({
      mutation: CREATE_POST_MUTATION,
      variables: { input },
    }).pipe(
      map((result: any) => result.data.createPost.post)
    );
  }
}
