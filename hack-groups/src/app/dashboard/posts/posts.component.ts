import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostApiService } from 'src/app/_core/api/post-api.service';
import { TablePost } from 'src/app/_core/models/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  listofPosts: TablePost[];

  constructor(
    private postApiService: PostApiService,
    private toasterService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    // this.postApiService.getTablePosts().subscribe((res) => {
    //   this.listofPosts = [...res.posts];
    // },
    // () => {
    //   this.toasterService.error('Could not retrieve the older posts.');
    // });
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
