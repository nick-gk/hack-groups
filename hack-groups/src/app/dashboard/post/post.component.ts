import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostDetails } from 'src/app/_core/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostDetails;
  @Input() preview = false;
  @Output() triggerRequest: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  move(next: boolean = false) {
    this.triggerRequest.emit(next);
  }

  manage(){
    this.router.navigate(['/post', this.post.id]);
  }

}
