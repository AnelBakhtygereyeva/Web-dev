import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductsItemComponent } from './components/product-item/product-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "products";
}
bootstrapApplication(AppComponent).catch((err) => console.error(err));
