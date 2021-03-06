import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostApiService } from 'src/app/_core/api/post-api.service';
import { MediaType } from 'src/app/_core/constants/MediaType';
import { CustomValidators } from 'src/app/_core/helpers/CustomValidators';
import { PostAnalysis, PostDetails } from 'src/app/_core/models/Post';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  postForm: FormGroup;
  postDetails: PostDetails;
  competitorPosts: PostDetails[] = [];
  ownKeywords: string[];
  recommendedKeyWords: string[] = [];
  analysis: PostAnalysis;
  competition: string[];
  id: string;
  displayPostBtn: boolean = false;
  personalRelevanceScore: number;
  industryRelevanceScore: number;
  allCompetitorsKeyWords: string[] = [];

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
    this.apiService.postAnalyzePost(payload).subscribe((res: PostAnalysis) => {
      if (res.competitors.length) {
        this.analysis = res;
        this.ownKeywords = res.postKeywords;
        if (res.competitors[0].competitor.name === 'Hootsuite') {
          res.competitors.shift();
        }
        if (res.competitors[0]) {
          this.competitorPosts.push(...res.competitors[0].posts.slice(0, 2));
        }
        if (res.competitors[1]) {
          this.competitorPosts.push(res.competitors[1].posts[0]);
        }
        let score = 0;
        this.competitorPosts.forEach(post => {
          this.recommendedKeyWords.push(...post.keyWords.split(',').slice(0, 2));
          score += post.score;
        });
        this.industryRelevanceScore = score * 9;
        // const somePosts = res.competitors[0].posts.slice(0, 10);
        // if (res.competitors[1]) {
        //   somePosts.push(...res.competitors[1].posts.slice(0, 10));
        // }
        // somePosts.forEach((post) => {
        //   this.allCompetitorsKeyWords.push(...post.keyWords.split(','));
        // });
        // console.log(this.allCompetitorsKeyWords);
        // let count = 0;
        // this.allCompetitorsKeyWords.forEach((keyword: string) => {
        //   this.ownKeywords.forEach((ownKeyWord) => {
        //     if (keyword == ownKeyWord) {
        //       ++count;
        //     }
        //   });
        // });
        // console.log(count);
        // console.log(this.ownKeywords);

        this.competition = this.analysis.competitors.map(competitor => competitor.competitor.name);
      }
    });
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
    // totalReactionsCount = comments + likes + reactions + shares
    // score = (comments / totalReactionsCount * 0.15) + (likes / totalReactionsCount * 0.05) + (reactions / totalReactionsCount * 0.1) + (shares / totalReactionsCount * 0.2) + (totalReactionsCount * 5000 / competitorFollowers)
  }

  displayPost(): void {
    this.postForm.get('content').valueChanges.subscribe((val) => {
      this.displayPostBtn =  !!val.length;
    })
  }

}
