import { Component, OnInit } from '@angular/core';
import Urls from 'src/app/_core/constants/Urls';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  urls = Urls;

  constructor() { }

  ngOnInit(): void {
  }

}
