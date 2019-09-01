import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
=======
import { Title } from '@angular/platform-browser';
>>>>>>> 352471db9416147fde73e739c89e8f8618f9d111

@Component({
  selector: 'app-homepage-title',
  templateUrl: './homepage-title.component.html',
  styleUrls: ['./homepage-title.component.sass']
})
export class HomepageTitleComponent implements OnInit {
  @Input() title: String;
  @Input() color: String;
  constructor() { }

  ngOnInit() {
  }

}
