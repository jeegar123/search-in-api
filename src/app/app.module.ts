import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './post.service';
import { SearchPipe } from './search.pipe';
import {FormsModule} from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [PostService],
  bootstrap: [AppComponent],
  exports: [
    SearchPipe
  ]
})
export class AppModule {
}
