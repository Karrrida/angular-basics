import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef | undefined

  title: string = ''
  text: string = ''
  id: number = 0

  constructor() {
  }

  ngOnInit() {}

  addPost() {
    if(this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: ++this.id
      }
      console.log(post.id)
      this.onAdd.emit(post)


      this.text = this.title = ''
    }
  }

  focusTitle() {
    this.inputRef?.nativeElement.focus()
  }
}
