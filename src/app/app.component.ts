import { Component } from '@angular/core';

// export interface Post {
//   title: string
//   text: string
//   id?: number
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isVisible = true

  // toggle: any = false
  // arr = [1, 1, 2, 3, 5, 8, 13]
  // objs = [
  //   {
  //     title: 'Post 1', author: 'Pavel', comments: [
  //       {name: 'Max', text: 'Lorem1'},
  //       {name: 'Jhon', text: 'LoremLorem1'},
  //     ]
  //   },
  //   {
  //     title: 'Post 2', author: 'Pavel 2', comments: [
  //       {name: 'Max 2', text: 'Lorem2'},
  //       {name: 'Jhon 2', text: 'LoremLorem2'},
  //     ]
  //   },
  // ] // for
  //
  // now: Date = new Date();

  // posts: Post[] = [
  //   {title: 'Want learn angular components', text: 'stil learning components...', id: 1},
  //   //{title: 'Next theme', text: 'About pipes...', id: 2}
  // ]
  // delPost(id: number) {
  //   console.log('id to remove', id)
  //   this.posts = this.posts.filter(p => p.id !== id)
  // }
  // upDatePosts(post: Post){
  //   this.posts.unshift(post)
  //   console.log('Post', post)
  // }
  //
  // ngOnInit() {
  //   setTimeout(() => {
  //     console.log('timeout')
  //     this.posts[0] = {title: 'Changed', text: 'dawda', id: 33}
  //   }, 5000)
  // }
}
