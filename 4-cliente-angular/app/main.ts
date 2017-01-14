import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {TasklistComponent} from "./tasklist.component";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NewTaskComponent} from "./newtask.component";

const appRoutes: Routes = [
    { path: 'tasks',
        component: TasklistComponent
    },
    { path: 'newtask',
        component: NewTaskComponent
    },
    { path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent,TasklistComponent, NewTaskComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err) => console.error(err));;