import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostDetails } from 'src/app/_core/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostDetails;

  @Output() triggerRequest: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(

  ) { }

  ngOnInit(): void {

  }

  move(next: boolean = false) {
    this.triggerRequest.emit(next);
  }

  manage(){

  }

}
