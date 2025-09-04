import { Component, OnInit } from '@angular/core';
import { Api } from '../service/api';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  searchText!: string
  studentData!: any[]

  constructor(private apiService: Api){}

  ngOnInit(): void {
    this.apiService.getStudents().subscribe((data:any)=> {
      this.studentData = data
      console.log(this.studentData)
    })
  }

}
