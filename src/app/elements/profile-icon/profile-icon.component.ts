import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.sass']
})
export class ProfileIconComponent implements OnInit, AfterViewInit {
  @Input() src: String;
  @Input() width;
  @ViewChild('square', { static: true }) square: ElementRef;
  @ViewChild('circle', { static: true }) circle: ElementRef;
  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;
  @ViewChild('circleWrapper', { static: false }) circleWrapper: ElementRef;
  circleR = 100;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // // console.log(this.width);
    this.width = parseInt(this.width, 0);
    this.circleR = parseInt(this.width, 0) / 2;
    this.renderer.setStyle(this.wrapper.nativeElement, 'width', `${this.width + 8}px`);
    this.renderer.setStyle(this.wrapper.nativeElement, 'height', `${this.width + 8}px`);
    this.renderer.setStyle(this.circleWrapper.nativeElement, 'width', `${this.width}px`);
    this.renderer.setStyle(this.circleWrapper.nativeElement, 'height', `${this.width}px`);
    this.getcoordinates();
  }

  getcoordinates() {
    const circle = { x: 0, y: 0 };
    const square = { x: 0, y: 0 };
    const randomAngle1 = Math.round(0.1667 * 360);
    let randomAngle2 = Math.round(0.1667 * 360);
    let scale = Math.random();
    scale = scale < 0.4 ? (scale + 0.4) : scale;
    randomAngle2 = Math.abs(randomAngle1 - randomAngle2) > 180 ? randomAngle2 : randomAngle1 + 180;
    circle.x = ((this.circleR * Math.sin(randomAngle1)) + this.circleR) < this.circleR ? ((this.circleR * Math.sin(randomAngle1)) + this.circleR) - 5 : ((this.circleR * Math.sin(randomAngle1)) + this.circleR);
    circle.y = ((this.circleR * Math.cos(randomAngle1)) + this.circleR) < this.circleR ? ((this.circleR * Math.cos(randomAngle1)) + this.circleR) - 5 : ((this.circleR * Math.cos(randomAngle1)) + this.circleR);
    square.x = ((this.circleR * Math.sin(randomAngle2)) + this.circleR) < this.circleR ? ((this.circleR * Math.sin(randomAngle2)) + this.circleR) - 5 : ((this.circleR * Math.sin(randomAngle2)) + this.circleR) + 10;
    square.y = ((this.circleR * Math.cos(randomAngle2)) + this.circleR) < this.circleR ? ((this.circleR * Math.cos(randomAngle2)) + this.circleR) - 5 : ((this.circleR * Math.cos(randomAngle2)) + this.circleR) + 10;
    // // console.log(this.circleR);
    // // console.log(circle);
    // // console.log(square);
    this.renderer.setStyle(this.square.nativeElement, 'top', `${circle.x}px`);
    this.renderer.setStyle(this.square.nativeElement, 'left', `${circle.y + 10}px`);
    this.renderer.setStyle(this.circle.nativeElement, 'top', `${square.x}px`);
    this.renderer.setStyle(this.circle.nativeElement, 'left', `${square.y}px`);
    this.renderer.setStyle(this.square.nativeElement, 'transform', `translate(-50%,-50%) rotate(${randomAngle2}deg) `);
  }

}
