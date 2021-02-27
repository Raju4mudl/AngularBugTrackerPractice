import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Bug } from './models/Bug';
import {BugOperationsService} from './services/BugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {


  bugLists : Bug[] = [];
  newBugName : String = '';
 
  id : number = 1;

  constructor(private bugOperation : BugOperationsService) { }

  onClickAddNewBug(){
    const newBug = this.bugOperation.createNewBug(this.newBugName);
    this.bugLists.push(newBug);

  }
  onRemoveClick(bugToRemove : Bug){
    //bugToRemove.isClosed = true;
    this.bugLists = this.bugLists.filter(bug => bugToRemove != bug);

  }

  onBugToToggle(bug : Bug){
    this.bugOperation.toggle(bug);
  }
  onRemoveClosed(){
    this.bugLists = this.bugLists.filter(bug => bug.isClosed == false)
  }

  getClosedBugCount() : number {
    return this.bugLists.reduce((closedCount, bug) => bug.isClosed? closedCount + 1 : closedCount ,0);
  }

  

  ngOnInit(): void {
  }

}
