import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {



  public userQuery!: string

  searchUser(userQuery:any){
    console.log(userQuery)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
