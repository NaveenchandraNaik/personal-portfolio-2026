import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./layout/footer/footer";
import { Header } from './layout/header/header';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { Project } from './features/project/project';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,About,Home,Footer,Contact,Project],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}
