import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass']
})
export class TicketsComponent implements OnInit {
  @Input() color: String;
  constructor() { }

  ngOnInit() {
  }

}
