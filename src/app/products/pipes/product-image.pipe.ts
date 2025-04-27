import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: null | string | string[]): string {
    const cloudinaryUrl = 'https://res.cloudinary.com/dbewojbpv/image/upload';

    if (value?.length === 0) {
      return './assets/images/no-image.jpg';
    }

    const image = Array.isArray(value) ? value!.at(0) : value

    if (!image) {
      return './assets/images/no-image.jpg';
    }

    return `${cloudinaryUrl}/${image}`;
  }
}
