import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostApiService } from 'src/app/_core/api/post-api.service';
import { MediaType } from 'src/app/_core/constants/MediaType';
import { CustomValidators } from 'src/app/_core/helpers/CustomValidators';
import { PostDetails } from 'src/app/_core/models/Post';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  postForm: FormGroup;
  postDetails: PostDetails;
  id: string;
  displayPostBtn: boolean = false;

  // prettier-ignore
  constructor(
    private fb: FormBuilder,
    private apiService: PostApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.getPostData();
    }
    this.displayPost();
  }

  generateForm(): void {
    this.postForm = this.fb.group({
      id: [null],
      content: [null, [Validators.required]],
      mediaFile: [null, [CustomValidators.website]],
      date: [Date.now()],
      mediaType: [MediaType.PHOTO],
      shares: [null],
      likes: [null],
      reactions: [null],
      comments: [null]
    });
  }

  getPostData(): void {
    this.apiService.getPost(this.id).subscribe(res => this.prefill(res));
  }

  prefill(post: PostDetails): void {
    this.postForm.patchValue({
      id: post.id,
      content: post.content,
      mediaFile: post.mediaFile,
      date: post.date,
      mediaType: post.mediaType,
      shares: post.shares,
      likes: post.likes,
      reactions: post.reactions,
      comments: post.comments
    });
  }

  analyze(): void {
    const payload = {
      content: this.postForm.getRawValue().content,
      photo: this.postForm.getRawValue().mediaFile
    };
    this.apiService.postAnalyzePost(payload).subscribe((res) => console.log(res));
  }

  post(): void {
    console.log(this.postForm);
    // comments 0.15
    // likes 0.05
    // reactions 0.1
    // shares 0.2
    // 100.000
    // 20
    // 20 * 5000 / 100000

  }

  displayPost(): void {
    this.postForm.get('content').valueChanges.subscribe((val) => {
      this.displayPostBtn =  !!val.length;
    })
  }

}
