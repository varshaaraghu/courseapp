import { Component, OnInit } from '@angular/core';
import { LogstatusService } from 'src/app/services/logstatus.service';
import {Router} from '@angular/router';

interface tokenstring{
  access_token:string;
}

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
  constructor(private ls:LogstatusService,private  router:Router) { 
    this.logStatus=this.ls.getStatus();
  }

  ngOnInit(): void {
  }
  logUser(){
    let userDetails="username="+this.username+"&password="+this.password+"&grant_type=password";
    this.ls.login(userDetails).subscribe(
      (data:tokenstring)=>{
          localStorage.setItem("token",data.access_token);
          localStorage.setItem("username",this.username);
          this.router.navigate(['/'])
      },
      ()=>{
        alert("Unable to Login");
      }
    )
  }
}
