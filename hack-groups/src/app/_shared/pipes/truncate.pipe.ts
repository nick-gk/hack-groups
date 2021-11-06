import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncateCharactersPipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    return value && value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}
