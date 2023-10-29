import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/services/post/post.service';
import { Post } from '../core/models/post';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  showReadMore: boolean = false;
  
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((result) => {
      this.posts = result;
      console.log(this.posts);
    });
  }

  truncateContent(content: string): string {
    if (this.showReadMore) {
      return content;
    }
    // Truncate content to a certain length
    const maxLength = 200;
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  }
}
