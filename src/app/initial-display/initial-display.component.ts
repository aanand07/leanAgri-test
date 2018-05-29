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
    this.ds.getPosts().subscribe(model=>{this.modelArr=model; console.log(this.modelArr);
      this.ds.sub.next(this.modelArr); }
    ); 
    
   // this.ds.getSub().subscribe(m=>{this.modelArr=m; console.log(7878)});
  }

  ngOnInit() {
    
   
  }

}
