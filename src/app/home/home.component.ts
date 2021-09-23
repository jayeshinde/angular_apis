import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  users: Object;
  users$: Observable<any>
  displayedColumns: string[] = ['first_name', 'last_name'];
  dataSource: any[];

  constructor(private data: DataService) {}

  // on init the Dataservice getUsers() function supplies a user array object.
  ngOnInit() {
    this.getUserList()
  }

  public getUserList() {
    this.data.getUsers().subscribe(d => {
      this.users = d;
      this.dataSource = this.users['data']
      console.log(this.users);
    });
  }

  public getUserListAsyncPipe() {
    console.log('befor invocation response')
    this.users$ = this.data.getUsers()
    console.log('after response')
    console.log(this.users$);
  }


}
