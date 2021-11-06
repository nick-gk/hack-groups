import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostApiService } from 'src/app/_core/api/post-api.service';
import { PostDetails, TablePost } from 'src/app/_core/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  listofPosts: TablePost[];
  selectedIndex: number = 0;
  postDetails: PostDetails;

  constructor(
    private postApiService: PostApiService,
    private toasterService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPosts();

  }

  getPosts(){
    this.postApiService.getTablePosts().subscribe((res: TablePost[]) => {
      this.listofPosts = [...res];
      this.selectPost(this.selectedIndex);
    },
    () => {
      this.toasterService.error('Could not retrieve the older posts.');
    });
  }

  selectPost(index){
    this.selectedIndex = index;
    this.postApiService.getPost(this.listofPosts[index].id).subscribe((res) => {
      this.postDetails = res;
    },
    () => {
      this.toasterService.error('Could not retrieve the post.');
    })
  }

  moveTo(next: boolean) {
    const index = next ? this.selectedIndex + 1 : this.selectedIndex - 1;
    this.selectPost(index);
  }

}
