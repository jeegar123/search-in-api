import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'search';
  posts:any[]=[];
  searchText:string

  constructor(private postService : PostService) {
  }



  ngOnInit() : void {
    this.postService.getPosts()._subscribe(
      // @ts-ignore
      (data: any) => {
        this.posts=data.body;
      }
    );
  }


}
