import { Component, OnInit } from '@angular/core';
import {IModel} from '../model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-initial-display',
  templateUrl: './initial-display.component.html',
  styleUrls: ['./initial-display.component.css']
})
export class InitialDisplayComponent implements OnInit {

  constructor(private ds: DataService){} 
  model: IModel;
  modelArr: IModel[];
  
  getPostFunc(){
    this.ds.getPosts().subscribe(model=>{this.modelArr=model; }
    ); 
    
   //this.ds.getSub().subscribe(m=>{this.modelArr=m; console.log(7878); console.log(this.modelArr)});
  }

  ngOnInit() {
    
    this.ds.getPosts().subscribe(model=>{this.modelArr=model;  }
    ); 
    this.ds.save(this.modelArr);
      this.ds.getSub().subscribe(m=>{this.modelArr=m; console.log(7878); console.log(this.modelArr)});
  }

}
