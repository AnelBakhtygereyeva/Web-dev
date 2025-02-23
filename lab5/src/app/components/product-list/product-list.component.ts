import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductsListComponent{
  @Input() product!: { id: number; name: string; description: string; imageUrls: string[]; rating: number; link: string; likes: number };
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
  currentImageIndex = 0;

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.imageUrls.length) % this.product.imageUrls.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.imageUrls.length;
  }

  share(platform: string) {
    const message = `Check out this product: ${this.product.name} - ${this.product.link}`;
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(message)}`, '_blank');
    }
  }

  likeProduct() {
    this.like.emit(this.product.id);
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}
