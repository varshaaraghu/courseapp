import { Component, OnInit } from '@angular/core';
import { LogstatusService } from 'src/app/services/logstatus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  styleObj={margin:"300px",marginTop:"30px",padding:"20px",height:"400px",width:"400px",border:"3px solid darkred" , boxShadow:"5px 5px 10px gray"};
  logStatus:boolean;
  constructor(private ls:LogstatusService) { 
    this.logStatus=this.ls.getStatus();
  }

  ngOnInit(): void {
  }

}
