import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
