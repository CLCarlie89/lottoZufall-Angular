import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name:String;

  constructor(private router: ActivatedRoute) {
    this.name = this.router.snapshot.paramMap.get('name');
  }

}
