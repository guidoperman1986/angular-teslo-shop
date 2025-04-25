import { Component, computed, input, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import { FallbackImagePipe } from "../../pipes/fallback-image.pipe";

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe, FallbackImagePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  cloudinaryUrl = 'https://res.cloudinary.com/dbewojbpv/image/upload/';

  product = input.required<Product>();

  ngOnInit(): void { }

  imageUrl = computed(() => {
    return `${this.cloudinaryUrl + this.product().images[0]}`;
  });

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/no-image.jpg'; // Path to your fallback image
  }
}
