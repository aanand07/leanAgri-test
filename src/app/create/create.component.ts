import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {IModel} from '../model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 model:IModel;
 modelArr :IModel[]=[];
  constructor(private ds: DataService, private route: Router) { }

  ngOnInit() {
   this.ds.getSub().subscribe(m=>{this.modelArr=m;console.log(this.modelArr)   });
  }
  createdataFunc(title: string, body: string, userId: number){
    this.ds.postData(title, body, userId).subscribe(model=>{this.model=model;
      
      this.modelArr.push(this.model); console.log(this.modelArr);
      this.ds.save(this.modelArr);});
   
      this.route.navigate(['']);
    
    
  }
}
