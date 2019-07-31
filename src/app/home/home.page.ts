import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  count = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;


  handleTap(){
    console.log("tap");
    this.count++;
    console.log(this.count);
  }


  handleSwipe(){
    console.log("swipe");
    this.count1++;
    console.log(this.count1);
  }

  handlePress(){
    console.log("press");
    this.count2++;
    console.log(this.count2);
  }

  handlePan(){
    console.log("pan");
    this.count3++;
    console.log(this.count3);
  }

  handlePinch(){
    console.log("pinch");
    this.count4++;
    console.log(this.count4);
  }
}


