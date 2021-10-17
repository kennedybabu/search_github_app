import { Component, OnInit, Input} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userProfile!: any
  constructor() { }



  ngOnInit(): void {
  }

}
