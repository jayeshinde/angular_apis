import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { User } from "../users";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  users: Object;
  displayedColumns: string[] = ['first_name', 'last_name'];
  dataSource: User[];

  constructor(private data: DataService) {}

  // on init the Dataservice getUsers() function supplies a user array object.
  ngOnInit() {
    this.getUserList()
  }

  public getUserList() {
    this.data.getUsers().subscribe(d => {
      this.users = d;
      this.dataSource = this.users['data']
    });
  }

}
