import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ContenComponent } from '../conten/conten.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ContenComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
