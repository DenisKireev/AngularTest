import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    /*
    Next, in order to use the HttpClient, we need to create an instance of it through dependency injection within the constructor:
    We also defined a method called getUsers() which we'll call in our component shortly. It returns a list of users from a public testing API.
    The getUser() method will provide us with a single user's information, which will accept a userId as a parameter.
    getPosts() will fetch some fictional posts for us to get more muscle memory with this process of communicating with services.
    sidebar demo*/
  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
    /*sidebar demo*/
}

