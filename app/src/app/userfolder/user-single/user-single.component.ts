import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Output() removed = new EventEmitter<User>();
  @Input() users:User[] =[];
  constructor() { }

  ngOnInit(): void {



  }
  remove(user: User){
    this.removed.emit(user);
}
}
