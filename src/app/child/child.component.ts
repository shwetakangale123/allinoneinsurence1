import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData :any;

  @Output() itemtEvent = new EventEmitter<any>();


  dataFromChildToParent:any;

  constructor() { 
    this.dataFromChildToParent = " This is data from child to parent component"
  }

  ngOnInit(): void {
  }

  sendDataFromParent(){
    console.log("Hi");
    this.itemtEvent.emit(this.dataFromChildToParent);
  }

}
