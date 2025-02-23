import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../product-list/product-list.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductsItemComponent {
  categories = ['All', 'Phones', 'Laptops', 'Tablets', 'Accessories'];
  selectedCategory: string = 'All';

  products: { [key: string]: Product[] } = {
    'Phones': [
      { id: 1, name: 'Смартфон Apple iPhone 16 Pro Max', description: '256Gb черный', rating: 4.81, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000', likes: 0 },
      { id: 2, name: 'Смартфон Xiaomi Redmi 13C', description: '8 ГБ/256 ГБ черный', rating: 4.54, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h82/84957845717022.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000', likes: 0 },
      { id: 3, name: 'Смартфон Apple iPhone 16 Pro Max', description: '256Gb серебристый', rating: 5, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h98/hb6/87295492915230.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/haa/hc9/87295492947998.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000', likes: 0 },
      { id: 4, name: 'Смартфон Apple iPhone 13', description: '128Gb синий', rating: 4.94, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64206207352862.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000', likes: 0 },
      { id: 5, name: 'Смартфон Samsung Galaxy A25', description: '5G 6 ГБ/128 ГБ темно-синий', rating: 4.6, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h20/h07/84932660559902.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h23/hb2/84932660690974.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0w7-CwFWFa9m2vdaCBurbUgXT0IDZFEnAqqwqeJu-2cvxhW8FFlTIaAuEtEALw_wcB', likes: 0 },
    ],
    'Laptops': [
      { id: 6, name: 'Ноутбук Apple MacBook Air 13 2022', description: '13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3', rating: 4.98, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000', likes: 0 },
      { id: 7, name: 'Ноутбук ThundeRobot 911S Core D', description: '15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F', rating: 4.96, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000', likes: 0 },
      { id: 8, name: 'Ноутбук Acer Aspire 3', description: '15.6" / 8 Гб / SSD 256 Гб / Win 11 / A315-35', rating: 4.72, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h39/84558388953118.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h3e/84558389018654.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0w7-CwFWFa9m2vdaCBurbUgXT0IDZFEnAqqwqeJu-2cvxhW8FFlTIaAuEtEALw_wcB', likes: 0 },
      { id: 9, name: 'Ноутбук Apple MacBook Air 13 2020', description: '13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63', rating: 4.92, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h16/h90/63947827478558.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000', likes: 0 },
      { id: 10, name: 'Ноутбук Lenovo IdeaPad 3', description: ' 15.6" / 8 Гб / SSD 512 Гб / Win 11 / 15IAU7', rating: 4.51, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2c/65053326376990.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/haa/hf8/65053328080926.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000', likes: 0 }
    ],
    'Tablets': [
      { id: 11, name: 'Планшет Apple iPad Air 2024', description: 'Wi-Fi 11 11 дюйм 8 Гб/128 Гб серый', rating: 4.99, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h4d/h58/86106953744414.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc6/hee/86745408536606.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000', likes: 0 },
      { id: 12, name: 'Планшет Samsung Galaxy Tab A9+', description: '5G 11 дюйм 8 Гб/128 Гб серебристый', rating: 4.78, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h6a/84434711904286.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000', likes: 0 },
      { id: 13, name: 'Планшет Umiio S24 ULTRA', description: '10.1 дюйм 16 Гб/512 Гб черный', rating: 4.11, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h19/h0b/86180659036190.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h9c/86180659167262.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h77/hd1/86180659298334.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/umiio-s24-ultra-10-1-djuim-16-gb-512-gb-chernyi-119999371/?c=750000000', likes: 0 },
      { id: 14, name: 'Планшет Huawei MatePad SE', description: 'AGS6-W09 11 дюйм 4 Гб/128 Гб серый', rating: 4.85, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h2b/h62/86746767261726.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h39/86952919826462.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h57/ha0/86746767786014.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-4-gb-128-gb-seryi-122142602/?c=750000000', likes: 0 },
      { id: 15, name: 'Планшет Apple iPad mini 2024', description: ' Wi-Fi 8.3 дюйм 8 Гб/128 Гб серый', rating: 4.93, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/p45/p50/12213625.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p4f/12213628.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd5/p4f/12213629.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-ipad-mini-2024-wi-fi-8-3-djuim-8-gb-128-gb-seryi-131140447/?c=750000000', likes: 0 }
    ],
    'Accessories': [
      { id: 16, name: 'Наушники Apple AirPods 3', description: 'with Lightning Charging Case белый', rating: 4.98, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000', likes: 0 },
      { id: 17, name: 'Зарядное устройство Apple ', description: '18W USB-C Power Adapter USB Type-C белый', rating: 4.92, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h16/h93/64377062064158.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000', likes: 0 },
      { id: 18, name: 'Наушники Marshall', description: 'Major IV черный', rating: 4.83, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000', likes: 0 },
      { id: 19, name: 'Смарт-часы Apple Watch SE 2024', description: ' S/M 40 мм бежевый GPS Gen.2', rating: 4.99, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000', likes: 0 },
      { id: 20, name: 'Смарт-часы Huawei Watch Fit 3', description: 'серебристый-белый-белый', rating: 4.78, imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hb5/hc5/86078683545630.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h72/h79/86078683578398.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h78/86079356928030.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/huawei-watch-fit-3-serebristyi-belyi-belyi-119668957/?c=750000000', likes: 0 }
    ]
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getDisplayedProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return Object.values(this.products).flat(); 
    }
    return this.products[this.selectedCategory] || [];
  }

  removeProduct(productId: number) {
    for (const category in this.products) {
      this.products[category] = this.products[category].filter(product => product.id !== productId);
    }
  }

  likeProduct(productId: number) {
    for (const category in this.products) {
      const product = this.products[category].find(p => p.id === productId);
      if (product) {
        product.likes++;
        break;
      }
    }
  }
}