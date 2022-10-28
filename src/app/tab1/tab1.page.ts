import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  wert1x: string;
  wert2y: string;
  reihen: string;

  t1: String;
  a: Array<String> = [];


  constructor(public router: Router) { }


  openNextTab(rechenArt: number) {
    this.a = [];

    switch (rechenArt) {
      case 1:
        this.t1 = this.getZahlenXausY(6, 49, 0).toString();
        break;
      case 2:
        this.t1 = this.getZahlenXausY(5, 50, 0).toString();
        break;
      case 3:
        this.t1 = this.getZahlenXausY(Number.parseInt(this.wert1x), Number.parseInt(this.wert2y), 1).toString();
        break;
    }

    this.router.navigate(['tabs/tab2', { name: this.t1 }])
  }

  getZahlenXausY(x: number, y: number, bol: number) {

    let n: number = Number.parseInt(this.reihen);

    if (n > 1000 || n <= 0 || Number.isNaN(n)) {
      return "Die Anzahl Reihen übersteigt die maximal mögliche Anzahl an Reihen,\nwelche auf 1000 gesetzt ist;" +
        "\noder ist 0 bzw. kleiner 0;  \noder es wurde nichts sinvolles eingegeben.";
    }

    if (bol == 1) {
      if (x >= y) {
        return "X muss kleiner als Y sein.";
      }
      if (Number.isNaN(x) || Number.isNaN(y)) {
        return "X und/oder Y hat keine sinvolle Eingabe.";
      }
    }

    let b: Array<number> = [];
    let z: number = 0;


    for (let x1: number = 0; x1 < n; x1++) {

      for (let i: number = 0; i < x; i++) {
        while (z == 0) {
          z = this.rand(1, y);

          for (let t: number = 0; t < i; t++) {
            if (b[t] == z) {
              z = 0;
            }
          }
        }
        b[i] = z;
        z = 0;
      }

      b.sort(this.sortNumber);

      let x2: String = "";
      for (let i: number = 0; i < x; i++) {
        x2 = x2 + " " + b[i] + " ";

      }

      if (this.a.indexOf(x2) != -1) {
        x1--;
      } else {
        this.a.push(x2);
      }
    }

    let s: String = "";
    s = s + this.a.join(" , \n");

    return s;
  }

  sortNumber(a, b) {
    return a - b;
  }

  rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
