import {Component} from "@angular/core";

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam asperiores assumenda aut cum ducimus ex, hic incidunt itaque libero magni molestiae numquam provident quam quia quod reprehenderit repudiandae vel! </p>
    </div>
  `,
  styles: [`
    .post4 {
      height: auto;
      padding: .5rem;
      border: 2px solid black;
    }
    h2 {
      font-size: 2rem;
    }
  `]
})

export class Post4Component{

}
