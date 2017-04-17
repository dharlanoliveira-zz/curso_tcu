import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {TasklistComponent} from './tasklist/tasklist.component';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root.component';
import {NewtaskComponent} from './newtask/newtask.component';
import { ToUpperDirective } from './to-upper.directive';

const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TasklistComponent
  },
  {
    path: 'newtask',
    component: NewtaskComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RootComponent,
    TasklistComponent,
    NewtaskComponent,
    ToUpperDirective
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
