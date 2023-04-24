import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  // public contents: any[] = [
  //   {
  //     parentClass: 'bottomUp-container',
  //     class: 'bottomUp',
  //     activeClass: 'bottomUp-active'
  //   },
  //   {
  //     parentClass: 'rightLeft-container',
  //     class: 'rightLeft',
  //     activeClass: 'rightLeft-active'
  //   },
  //   {
  //     parentClass: 'leftRight-container',
  //     class: 'leftRight',
  //     activeClass: 'leftRight-active'
  //   }
  // ];

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.reveal, true);
    window.onload = this.reveal;
  }

  reveal(): void {
    let contents = [
      {
        parentClass: 'bottmUp-container',
        class: 'bottomUp',
        activeClass: 'bottomUp-active'
      },
      {
        parentClass: 'rightLeft-container',
        class: 'rightLeft',
        activeClass: 'rightLeft-active'
      },
      {
        parentClass: 'leftRight-container',
        class: 'leftRight',
        activeClass: 'leftRight-active'
      }
    ];
    contents.forEach(content=>{
      let reveals = document.querySelectorAll(`.${content.class}`);
      reveals.forEach(reveal => {
        let windowHeight = window.innerHeight;
        let elementTop = reveal.getBoundingClientRect().top;
        let elementVisible = 0.5*windowHeight+30;
        console.log(elementTop, windowHeight-elementVisible)
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add(content.activeClass);
        }
      })
    })
  }

}
