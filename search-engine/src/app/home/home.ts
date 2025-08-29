import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  searchId!: string
  visible:boolean = false

  constructor(){}

  ngOnInit(): void {
  }

}
