import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostApiService } from 'src/app/_core/api/post-api.service';
import { MediaType } from 'src/app/_core/constants/MediaType';
import { CustomValidators } from 'src/app/_core/helpers/CustomValidators';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  postForm: FormGroup;

  // prettier-ignore
  constructor(
    private fb: FormBuilder,
    private apiService: PostApiService
  ) { }

  ngOnInit(): void {
    this.generateForm();
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

  analyze(): void {
    console.log('analyzing...');
  }

  post(): void {
    console.log(this.postForm);
    const payload = {
      content: this.postForm.getRawValue().content,
      photo: this.postForm.getRawValue().mediaFile
    };

    this.apiService.postAnalyzePost(payload).subscribe((res) => console.log(res));
  }

}
