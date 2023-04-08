import { Component } from '@angular/core';
// import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const navp = document.querySelector(".close-ham");

    hamburger?.addEventListener('click', ()=>{
      //Animate Links
        navLinks?.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
    navp?.addEventListener('click', ()=>{
      navLinks?.classList.remove("open");
      hamburger?.classList.toggle("toggle");
    })
  }
 
}
