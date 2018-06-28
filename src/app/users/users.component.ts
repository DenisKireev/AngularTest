import { Component, OnInit } from '@angular/core';
  /*Whenever you wish to iterate over an array or array of objects, you use the Angular directive *ngFor. We then use interpolation brackets to call upon the properties of the returned object to display them in the browser
  sidebar demo
  Import animation
  */
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

    // Add this:
    animations: [
      trigger('listStagger', [
        transition('* <=> *', [
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(-15px)' }),
              stagger(
                '50ms',
                animate(
                  '550ms ease-out',
                  style({ opacity: 1, transform: 'translateY(0px)' })
                )
              )
            ],
            { optional: true }
          ),
          query(':leave', animate('50ms', style({ opacity: 0 })), {
            optional: true
          })
        ])
      ])
    ]
})
export class UsersComponent implements OnInit {
  /*To display the results, we're going to use an Observable, so we're importing it here, too. 
  In the constructor, we're creating an instance of our service. Then, within the lifecycle hook ngOnInit() (this runs when the component loads), we're calling our getUsers() method and subscribing to it. Inside, we're binding our users$ object to the result returned by the API
  sidebar demo*/

  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }

}
