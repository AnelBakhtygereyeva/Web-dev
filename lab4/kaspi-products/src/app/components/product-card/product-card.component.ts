import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: { name: string; description: string; imageUrls: string[]; rating: number; link: string };
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
}
