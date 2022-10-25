import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.css']
})
export class SimpleLayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
