import {
  Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList, Renderer2
} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.sass']
})
export class HomePageHeaderComponent implements OnInit, AfterViewInit {
  width = 500;
  height = 500;
  device = 'desktop';
  ratio;
  innerWidth;
  layoutChanges;
  @ViewChild('svgH', { static: true }) svgH: ElementRef;
  @ViewChild('svgV', { static: true }) svgV: ElementRef;
  @ViewChildren('path', { read: ElementRef }) path: QueryList<ElementRef>;
  @ViewChildren('pathH', { read: ElementRef }) pathH: QueryList<ElementRef>;
  animectrl = anime;
  isLandScape = true;
  constructor(breakpointObserver: BreakpointObserver, private renderer: Renderer2) {
    this.layoutChanges = breakpointObserver.observe([
      '(orientation: portrait)',
      '(orientation: landscape)',
    ]);

  }

  ngAfterViewInit() {

    this.layoutChanges.subscribe(result => {
      console.log(result.breakpoints['(orientation: landscape)'] ? 'landscape' : 'portrait');
      this.isLandScape = result.breakpoints['(orientation: landscape)'];
      if (this.isLandScape) {
        // this.renderer.setStyle(this.svgH.nativeElement, 'opacity', '1');
        // this.renderer.setStyle(this.svgV.nativeElement, 'opacity', '0');
        this.renderer.setStyle(this.svgH.nativeElement, 'display', 'block');
        this.renderer.setStyle(this.svgV.nativeElement, 'display', 'none');
      } else {
        // this.renderer.setStyle(this.svgH.nativeElement, 'opacity', '0');
        // this.renderer.setStyle(this.svgV.nativeElement, 'opacity', '1');
        this.renderer.setStyle(this.svgH.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.svgV.nativeElement, 'display', 'block');

      }
      this.startanim(this.isLandScape);
    });
  }
  ngOnInit(): void {

  }
  startanim(isLandScape) {
    if (this.isLandScape) {
      this.path.forEach(e => {
        anime.remove(e.nativeElement);
        // console.log(e.nativeElement);
        e.nativeElement.setAttribute('stroke-dasharray', e.nativeElement.getTotalLength());
        const exraduration = 3000 + (Math.random() * 1500);
        // console.log(exraduration);
        const tl = anime({
          easing: 'cubicBezier(0.650, 0.050, 0.490, 0.880)',
          duration: exraduration,
          round: 10,
          targets: e.nativeElement, strokeDashoffset: () => {
            return e.nativeElement.getTotalLength() * 2;
          },
          complete: (anim) => {
            if (anim.complete) {
              tl.restart();
            }
          }
        });

      });

    } else {
      this.pathH.forEach(e => {
        anime.remove(e.nativeElement);
        // console.log(e.nativeElement);
        e.nativeElement.setAttribute('stroke-dasharray', e.nativeElement.getTotalLength());
        const exraduration = 3000 + (Math.random() * 1500);
        // console.log(exraduration);
        const tl = anime({
          easing: 'cubicBezier(0.650, 0.050, 0.490, 0.880)',
          duration: exraduration,
          round: 10,
          targets: e.nativeElement, strokeDashoffset: () => {
            return e.nativeElement.getTotalLength() * 2;
          },
          complete: (anim) => {
            if (anim.complete) {
              tl.restart();
            }
          }
        });

      });
    }

  }


}
