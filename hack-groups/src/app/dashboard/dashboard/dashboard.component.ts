import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PostApiService } from 'src/app/_core/api/post-api.service';
import { PageEntity } from 'src/app/_core/models/Page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  page: PageEntity;
  loaded = false;
  status = [];

  lineChartData: ChartDataSets[] = [
    { data: [50, 100, 75, 30, 66, 58, 99, 120, 9, 211], label: 'Likes', fill: false },
    { data: [30, 120, 95, 60, 30, 78, 103, 73, 35, 140], label: 'Shares', fill: false },
    { data: [40, 90, 130, 103, 40, 58, 123, 63, 45, 160], label: 'Comments', fill: false },
    { data: [35, 100, 66, 89, 50, 68, 83, 113, 25, 111], label: 'Reactions', fill: false }
  ];

  lineChartLabels: Label[] = ['01 - 07 nov', '25 - 31 oct', '18 - 24 oct', '11 - 17 oct', '4 - 10 oct', '27 sep - 03 oct', '20 - 26 sep', '13 - 19 sep', '6 - 12 sep', '30 - 5 sep'];

  public lineChartColors: Color[] = [
    {
      borderColor: '#001529'
    },
  ];

  lineChartOptions: (ChartOptions) = {
    responsive: true,
  };

  // prettier-ignore
  constructor(
    private apiService: PostApiService
  ) { }

  ngOnInit() {
    this.getMyPage();
  }

  getMyPage(): void {
    this.apiService.getMyPage().subscribe(res => {
      this.page = res;
      this.page.pageActions = 365;
      this.page.pageViews = 423;
      this.page.newLikes = 389;
      this.page.impact = 2778;
      this.page.interactions = 190;
      this.page.newFollowers = 345;
      this.getMyStatus();
    });
  }

  getMyStatus(): void {
    this.apiService.getMyStatus().subscribe(res => {
      console.log(res);
      Object.keys(res).forEach(key => this.status.push(res[key]));
      this.status = Object.values(res).slice(0, 10);
      this.lineChartData.forEach((data, i) => {
        this.status.forEach((item, index) => {
          if (data.label === 'Likes') {
            data.data[index] = item.likes;
          }
          if (data.label === 'Shares') {
            data.data[index] = item.shares;
          }
          if (data.label === 'Reactions') {
            data.data[index] = item.reactions;
          }
          if (data.label === 'comments') {
            data.data[index] = item.comments;
          }
        });
      });
      this.loaded = true;
    });
  }

}
