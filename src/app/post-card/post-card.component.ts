import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../core/models/post';
import { Author } from '../core/models/user';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  author: Author;

  showReadMore: boolean = false;

  constructor(){}

  ngOnInit() {
  }

  truncateContent(content: string): string {
    if (this.showReadMore) {
      return content;
    }
    // Truncate content to a certain length
    const maxLength = 200;
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  }

  toggleReadMore() {
    this.showReadMore = !this.showReadMore;
  }
}
