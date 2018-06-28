  /*This, as you see, is very similar to our users component. The only 
  difference comes when we import ActivatedRoute and call it within the 
  constructor.
The purpose of this code allows us to grab the id router parameter that 
we defined in the app's routing file earlier. This will give us access to 
the user ID and then pass it to the getUser() method that we defined.
*/
import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    );
  }

}
