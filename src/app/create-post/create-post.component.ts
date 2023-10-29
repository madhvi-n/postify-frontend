import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../core/services/post/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      authorId: 1
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const { title, content, authorId } = this.postForm.value;
      this.postService.createPost( {
          "title": "October Post",
          "content": "This is the content of my post.",
          "authorId": 1
        }).subscribe(
        (response) => {
          // Handle the success case
          console.log('Post created:', response);
          // You can also reset the form
          this.postForm.reset();
        },
        (error) => {
          // Handle the error case
          console.error('Error creating post:', error);
        }
      );
    }
  }

}
