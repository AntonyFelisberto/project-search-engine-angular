import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/student';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(items: Student[], searchText: string): Student[] {
    if (!items) return [];
    if (!searchText) return items;

    const lower = searchText.toLowerCase();

    return items.filter(student =>
      student.name.toLowerCase().includes(lower) ||
      student.course.toLowerCase().includes(lower) ||
      student.passingYear.toString().includes(lower)
    );
  }

}
