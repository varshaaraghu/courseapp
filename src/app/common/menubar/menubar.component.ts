import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  lang:string="English";
  log_message:string="LOGIN";
  constructor(private ts:TranslateService ){
    this.ts.use(this.lang);
  }

  ngOnInit(): void {
  }
  langChange(){
    this.ts.use(this.lang);
  }
}
