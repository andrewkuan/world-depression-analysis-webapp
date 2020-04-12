import { BlogComponent } from './blog/blog.component';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component : HomeinfoComponent},

  { path: 'blog', component : BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [

  HomeinfoComponent,

  BlogComponent
  ];
