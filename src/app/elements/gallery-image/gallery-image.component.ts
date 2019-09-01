import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.sass']
})
export class GalleryImageComponent implements OnInit {
  @Input() src: String;
  constructor() { }

  ngOnInit() {
  }

}
