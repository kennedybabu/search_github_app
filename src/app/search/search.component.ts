import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {



  public userQuery!: string
  public userProfile!: any

  searchUser(userQuery:any){
    this.getUserService.getUserData(this.userQuery).subscribe(userData=>{
      this.userProfile = userData
      console.log(this.userProfile)
    })
  }

  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
  }

}
