import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { course } from 'src/app/model/couser';
import { PubSub } from 'pubsub-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  type:string="All";
  courses:course[];
  constructor(private cs:CoursesService) {
    PubSub.subscribe("type-event",(event,data)=>{
      this.type=data;
    })
   }

  ngOnInit(): void {
    this.cs.getCourses().subscribe(
      (data:course[])=>this.courses=data ,
        ()=>this.courses=[])
    
  }

}
