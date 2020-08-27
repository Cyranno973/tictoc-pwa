import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square1',
  templateUrl: './square1.component.html',
  styleUrls: ['./square1.component.scss']
})
export class Square1Component implements OnInit {
  @Input() value: 'X' | 'O';
  constructor() { }

  ngOnInit(): void {
  }

}
