import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project',
  imports: [CarouselModule, MatCardModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projects = [
    {
      title: 'Pollmonk',
      image: 'assets/images/pollmonk.jpg',
      description: 'Angular + Angular Material',
    },
    {
      title: 'SunAuto Parts',
      image: 'assets/images/sun_auto_parts.jpg',
      description: 'Angular + Tailwind',
    },
    {
      title: 'At Your Service',
      image: 'assets/images/at_your_service.jpg',
      description: 'Wordpress + Elementor',
    },
    {
      title: 'WRSS & WROS',
      image: 'assets/images/WRSS.jpg',
      description: 'HTML + CSS + JavaScript',
    },
    {
      title: 'Excelsior Certification',
      image: 'assets/images/Excelsior_Certification.jpeg',
      description: 'Wordpress + Elementor',
    },
    {
      title: 'GTG Perfume',
      image: 'assets/images/GTG.png',
      description: 'HTML + CSS + JavaScript',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 5,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    center: true,
    // animateOut: 'fadeOut',
    smartSpeed: 800,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
      1280: { items: 4 },
    },
  };
}
