import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {StyleDirective} from "./directives/style.directive";
import { IfnotDirective } from './directives/ifnot.directive';
//import { PostFormComponent } from './post-form/post-form.component';
//import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotDirective,
   // PostFormComponent,
    //PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
