import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount')
  likesCount!: number;
  @Input('isActive')
  isActive: boolean = false;

  onClick() {
    this.likesCount = (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
