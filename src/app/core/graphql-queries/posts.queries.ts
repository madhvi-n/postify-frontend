import { gql } from '@apollo/client/core';

export const GET_POSTS_QUERY = gql`
  query {
    posts(published: true) {
      title
      content
      author {
        id
        firstName
        lastName
        email
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: PostCreateUpdateInput!) {
    createPost(input: $input) {
      post {
        title
        content
        authorId
      }
    }
  }
`;
