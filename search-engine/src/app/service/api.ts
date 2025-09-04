import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class Api {
  baseUrl = 'http://localhost:3000/api'

  private readonly http = inject(HttpClient)

  getStudents(): Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/student`)
  }

  addStudent(studentData:FormData): Observable<Student>{
    return this.http.post<Student>(`${this.baseUrl}/student`, studentData)
  }
}
