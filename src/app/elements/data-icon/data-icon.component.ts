import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-data-icon',
  templateUrl: './data-icon.component.html',
  styleUrls: ['./data-icon.component.sass']
})
export class DataIconComponent implements OnInit, AfterViewInit {
  @Input() data: string;
  @Input() color: string;
  @Input() title: string;
  @ViewChild('square', { static: true }) square: ElementRef;
  @ViewChild('circle', { static: true }) circle: ElementRef;
  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;
  @ViewChild('circleWrapper', { static: false }) circleWrapper: ElementRef;
  circleR = 100;
  width: number;
  image1 = Math.round(Math.random() * 8);
  image2 = Math.round(Math.random() * 8);
  constructor(private renderer: Renderer2) {
    this.image1 = this.image1 === 0 ? this.image1 + 1 : this.image1;
    this.image2 = this.image2 === 0 ? this.image2 + 1 : this.image2;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.width = this.circleWrapper.nativeElement.clientHeight;
    this.circleR = this.width / 2;
    this.getcoordinates();
  }

  getcoordinates() {
    const circle = { x: 0, y: 0 };
    const square = { x: 0, y: 0 };
    const randomAngle1 = Math.round(Math.random() * 360);
    let randomAngle2 = Math.round(Math.random() * 360);
    let scale = Math.random();
    scale = scale < 0.4 ? (scale + 0.4) : scale;
    randomAngle2 = Math.abs(randomAngle1 - randomAngle2) > 180 ? randomAngle2 : randomAngle1 + 180;
    // tslint:disable: max-line-length
    circle.x = ((this.circleR * Math.sin(randomAngle1)) + this.circleR) < this.circleR ? ((this.circleR * Math.sin(randomAngle1)) + this.circleR) - 7.5 : ((this.circleR * Math.sin(randomAngle1)) + this.circleR) + 10;
    circle.y = ((this.circleR * Math.cos(randomAngle1)) + this.circleR) < this.circleR ? ((this.circleR * Math.cos(randomAngle1)) + this.circleR) - 7.5 : ((this.circleR * Math.cos(randomAngle1)) + this.circleR) + 10;
    square.x = ((this.circleR * Math.sin(randomAngle2)) + this.circleR) < this.circleR ? ((this.circleR * Math.sin(randomAngle2)) + this.circleR) - 7.5 : ((this.circleR * Math.sin(randomAngle2)) + this.circleR) + 10;
    square.y = ((this.circleR * Math.cos(randomAngle2)) + this.circleR) < this.circleR ? ((this.circleR * Math.cos(randomAngle2)) + this.circleR) - 7.5 : ((this.circleR * Math.cos(randomAngle2)) + this.circleR) + 10;
    this.renderer.setStyle(this.square.nativeElement, 'top', `${circle.x}px`);
    this.renderer.setStyle(this.square.nativeElement, 'left', `${circle.y}px`);
    this.renderer.setStyle(this.circle.nativeElement, 'top', `${square.x}px`);
    this.renderer.setStyle(this.circle.nativeElement, 'left', `${square.y}px`);
    this.renderer.setStyle(this.square.nativeElement, 'transform', `translate(-50%,-50%) rotate(${randomAngle2}deg) `);
    this.renderer.setStyle(this.circle.nativeElement, 'transform', `translate(-50%,-50%) rotate(${randomAngle1}deg) `);
  }

}
