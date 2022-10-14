import { Candy } from './../models/candy.model';
import { PillowCaseService } from './pillow-case.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pillow-case',
  templateUrl: './pillow-case.component.html',
  styleUrls: ['./pillow-case.component.css'],
})
export class PillowCaseComponent implements OnInit {
  // Create local Subscription

  myCandies: Candy[] = [];

  constructor(private pillowCaseService: PillowCaseService) {}

  ngOnInit(): void {
    this.myCandies = this.pillowCaseService.getMySecretStash();
    this.pillowCaseService.candiesUpdated.Subscribe((candyArray)=>{
      this.myCandies = candyArray;
    })
    // Subscribe to the a Subject on pillowCase and store in a local Subscription
  }

  onEatAllCandy(): void {
    this.pillowCaseService.clearCandy();
  }
}
