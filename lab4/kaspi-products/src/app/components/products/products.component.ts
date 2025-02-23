import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'Смартфон Apple iPhone 16 Pro Max ',
      description: '256Gb черный',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'
      ],
      rating: 4.81,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000 ',
    },
    {
      name: 'Смартфон Xiaomi Redmi 13C',
      description: '8 ГБ/256 ГБ черный',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h82/84957845717022.jpg?format=gallery-medium'
      ],
      rating: 4.54,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro Max',
      description: '256Gb серебристый',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hb6/87295492915230.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hc9/87295492947998.png?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000',
    },
    {
      name: 'Пылесос Deerma',
      description: 'DX700S серый',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/h74/63950404878366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h5a/63950406582302.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h67/63950407925790.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/deerma-dx700s-seryi-100680527/?c=750000000',
    },
    {
      name: 'Электрогриль Xiaomi',
      description: 'Smart Air Fryer 6.5L BHR7357EU',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h3f/87089997873182.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h87/87089997938718.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/hb9/87089998004254.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/elektrogril-xiaomi-smart-air-fryer-6-5l-bhr7357eu-118273472/?c=750000000',
    },
    {
      name: 'Ноутбук Apple MacBook Air 13 2022',
      description: '13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium'
      ],
      rating: 4.92,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
    },
    {
      name: 'Ноутбук ThundeRobot',
      description: '911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
    },
    {
      name: 'Наушники Apple AirPods 3',
      description: 'with Lightning Charging Case белый',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium'
      ],
      rating: 4.97,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    },
    {
      name: 'Умная колонка Яндекс Станция',
      description: 'Лайт 2 фиолетовый',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-medium'
      ],
      rating: 4.97,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
    },
    {
      name: 'Стул C06',
      description: '80x46x40 см, белый',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p2b/3187773.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p2b/3187774.jpg?format=gallery-medium'
      ],
      rating: 4.87,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
    }

  ];
}
