import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userimages :string[];
  selected:string="";
  userForm:any;
  imgSelected:boolean=false;
  constructor(private formbuilder:FormBuilder,private us:UserService) { 
    this.userForm=this.formbuilder.group({
            username:['',[Validators.required,Validators.pattern("[a-z]{4,12}")]],//fieldname:default value,validations
            password:['',[Validators.required,Validators.pattern("[a-zA-Z0-9_$]{6,18}")]],
            role:['User']
    })
  }

  ngOnInit(): void {
    this.us.getUserImages().subscribe(
      (data:string[])=>this.userimages=data,
      ()=>this.userimages=[]
    )
  }
  saveUser():void{
    let obj={
      username:this.userForm.value.username,
      password:this.userForm.value.password,
      role:this.userForm.value.role,
      imagefile:this.selected
    }
    this.us.storeUser(obj).subscribe(
      ()=>{
          alert("USER IS ADDED");
          this.userForm.get('username').setValue('');
          this.userForm.get('password').setValue('');
          this.selected=" ";
      },
      ()=>{
          alert("Username already exists");
      }
    )
  }
  setSelected(str:string){
    this.imgSelected=true;
    this.selected=str;
  }

}
