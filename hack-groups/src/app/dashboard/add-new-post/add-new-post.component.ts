import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_core/api/api.service';
import { HomeService } from 'src/app/_core/api/post-api.service';
import { MediaType } from 'src/app/_core/constants/MediaType';
import { CustomValidators } from 'src/app/_core/helpers/CustomValidators';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  postForm: FormGroup;
  id: string;

  // prettier-ignore
  constructor(
    private fb: FormBuilder,
    private apiService: HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.getPostData();
    }
  }

  generateForm(): void {
    this.postForm = this.fb.group({
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
    
  }

}
