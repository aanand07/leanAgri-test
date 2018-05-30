import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {IModel} from '../model';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  post : IModel; id: number; post1: IModel;
  modelArr: IModel[];
  constructor(private ds: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{this.id = Number.parseInt(params['id'])}) ;
    this.ds.getPostDetails(this.id).subscribe(data=>{this.post=data});
    this.ds.getSub().subscribe(m=>{this.modelArr=m  });
  }
  updatedataFunc(){
    this.ds.updatePost(this.id, this.post.title, this.post.body, this.post.userId).subscribe(data=>{this.post1=data;
     
    let index= this.modelArr.findIndex(i=>i.id==this.id); this.modelArr[index]=this.post1;
    this.ds.save(this.modelArr);
     });
    this.router.navigate(['']);
  }

}
