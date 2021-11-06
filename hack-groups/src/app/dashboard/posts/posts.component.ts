import { Component, OnInit } from '@angular/core';
import { TablePost } from 'src/app/_core/models/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  listofPosts: TablePost[];

  constructor() { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.listofPosts = [
      {
        id: 1,
        date: new Date(),
        preview: 'Thesdfsdf sdfds ...',
        likes: 34,
        comments: 2,
        shares: 1
      }
    ]
  }

}
