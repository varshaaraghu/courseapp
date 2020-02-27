import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ManageComponent } from './pages/manage/manage.component';
import { DemosComponent } from './pages/demos/demos.component';
import { CourseComponent } from './pages/home/course/course.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DiscountPipe } from './pipes/discount.pipe';
import { CoursefilterPipe } from './pipes/coursefilter.pipe';
import { from } from 'rxjs';
import { TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './common/login/login.component';
import { UserComponent } from './common/user/user.component';


export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    ReviewsComponent,
    OffersComponent,
    ManageComponent,
    DemosComponent,
    CourseComponent,
    DiscountPipe,
    CoursefilterPipe,
    LoginComponent,
    UserComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]
      }
    }),

    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
