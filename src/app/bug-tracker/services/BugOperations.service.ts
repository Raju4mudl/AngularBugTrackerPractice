import { Injectable } from "@angular/core";
import { Bug } from "../models/Bug";

@Injectable ({
    providedIn: 'root',
})
export class BugOperationsService{
    private currentBugId : number =0;
    
    createNewBug(newBugName : String) : Bug{
        const newBug : Bug = {
            id : ++this.currentBugId,
            bugName : newBugName,
            isClosed : false,
            createdAt : new Date()
          }
          return newBug;
    }

    toggle(bug : Bug) : void{
        bug.isClosed = !bug.isClosed;
    }
}