import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import {RouterModule, Routes} from '@angular/router';
import { InitialDisplayComponent } from './initial-display/initial-display.component';

const routes: Routes=[
  {path:'', component: InitialDisplayComponent},
  {path:'create', component: CreateComponent},
  {path:'update', component: UpdateComponent},
  {path:'details', component: DetailComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    DetailComponent,
    InitialDisplayComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
