import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallbackImage'
})
export class FallbackImagePipe implements PipeTransform {

  transform(imageUrl: string | null | undefined, fallbackUrl: string): string {
    return imageUrl && imageUrl.trim() ? imageUrl : fallbackUrl;
  }

}
