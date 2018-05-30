import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {IModel} from '../model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  post : IModel; id: number;
  comments:  {postid : number, id: number, name: string, email: string, body: string }[];
  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{this.id = Number.parseInt(params['id'])}) ;
    this.ds.getPostDetails(this.id).subscribe(data=>{this.post=data});
    this.ds.getPostComments(this.id).subscribe(data=>{this.comments=data});
  }

}
