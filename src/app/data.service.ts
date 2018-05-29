import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IModel} from './model';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  model: IModel;
  modelArr:IModel[];
  sub = new Subject<IModel[]>();
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  save(t: IModel[]){
    this.sub.next(t); console.log(this.sub);
  }
  getSub() : Observable<IModel[]>{
    return this.sub.asObservable();
  }
  constructor(private http: HttpClient) { }
  postData(title: string, body: string, userId: number): Observable<IModel>{
   
    
    return this.http.post<IModel>("https://jsonplaceholder.typicode.com/posts",  JSON.stringify({
      title,
      body,
      userId
    }), this.httpOptions);
  }
  getPosts():  Observable<IModel[]>{
   
    
    return this.http.get<IModel[]>("https://jsonplaceholder.typicode.com/posts", this.httpOptions);
  }
}
