import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*e need to import our components at the top, and add them to the Routes array shown 
sidebar demo*/
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    /*We've imported our 3 components, and then defined three objects in the Routes array.
The first object specifies that the UsersComponent will be the default component that loads on the root path. We leave the path value empty forthis.
The next route is for a user details section. We've specified a wildcard named id. We'll use this to fetch that value from the router in order to retrieve the correct user details.
Then another route for a component and path called posts.
    sidebar demo*/
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
