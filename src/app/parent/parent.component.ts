import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataFromParentToChild:any;
  dataFromChildToParent:any;

  constructor() {
    this.dataFromParentToChild = "This is data From parent to child component"
  
   }

  ngOnInit(): void {
  }

  emitDataFromChild(ev:any){
    console.log("hello this is custom event")
    console.log(ev);
    this.dataFromChildToParent = ev;
  }

}
