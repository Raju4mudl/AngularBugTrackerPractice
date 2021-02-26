import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugLists : Bug[] = [];
  newBugName : String = '';
 
  id : number = 1;


  onClickAddNewBug(){
    const newBug : Bug = {
      id : this.id++,
      bugName : this.newBugName,
      isClosed : false,
      createdAt : new Date()
    }
    this.bugLists.push(newBug);

  }
  onRemoveClick(bugToRemove : Bug){
    bugToRemove.isClosed = true;

  }

  onRemoveClosed(){
    this.bugLists = this.bugLists.filter(bug => bug.isClosed == false)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
