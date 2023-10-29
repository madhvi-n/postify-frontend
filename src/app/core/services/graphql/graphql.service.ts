import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    const uri = 'http://localhost:8000/graphql';
    const http = this.httpLink.create({ uri })
    this.apollo.create({
     link: http,
     cache: new InMemoryCache(),
   });
  }

  executeQuery(query: any): Observable<any> {
    return this.apollo.query({ query });
  }

  executeMutation(mutation: any, variables: any = {}): Observable<any> {
    return this.apollo.mutate({ mutation, variables });
  }
}
