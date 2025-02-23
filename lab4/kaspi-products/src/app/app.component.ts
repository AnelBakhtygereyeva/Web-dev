import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ProductsComponent],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "products";
}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
