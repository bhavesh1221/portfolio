import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workex',
  templateUrl: './workex.component.html',
  styleUrls: ['./workex.component.scss']
})
export class WorkexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor = "#23252f";
  }

}
