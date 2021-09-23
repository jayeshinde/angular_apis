import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from './users'


@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  getUsers() {
    console.log('before response')
    return this.http.get<any[]>("https://reqres.in/api/users");
  }
}
