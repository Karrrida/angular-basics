import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges{

  @Input() posts!: Post;
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef!: ElementRef

  delPost() {
    this.onRemove.emit(this.posts.id)
  }

  //lifeCycle Hooks

  ngOnChanges(changes:SimpleChanges): void {
    console.log('ngOnCHanges', changes)
  }
  ngOnInit() {
    console.log('ngOnInit')
    //console.log(this.infoRef.nativeElement)
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

}
