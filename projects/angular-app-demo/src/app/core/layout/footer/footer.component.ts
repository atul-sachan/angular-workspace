import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public appVersion = "1.0";
  constructor() { }

  ngOnInit(): void {
  }

}
