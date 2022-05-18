import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { BudgetItem } from './../../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }
  deleteItem(item : BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
  }
  updateItem(UpdateEvent: UpdateEvent ){
    this.budgetItems[this.budgetItems.indexOf(UpdateEvent.old)] = UpdateEvent.new;


    this.totalBudget -= UpdateEvent.old.amount;
    this.totalBudget += UpdateEvent.new.amount;
  }
}
