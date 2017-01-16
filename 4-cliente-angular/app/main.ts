import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {TasklistComponent} from "./tasklist.component";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NewTaskComponent} from "./newtask.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToUpper} from "./diretivas/toupper.directive";
import {PipesComponent} from "./exemplos/pipes.component";
import {FilterPipe} from "./pipes/filter.pipe";
import {OrderPipe} from "./pipes/order.pipe";

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
    }/*,
    { path: 'pipes',
        component: PipesComponent
    },*/
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
    declarations: [AppComponent,TasklistComponent, NewTaskComponent, ToUpper, OrderPipe, FilterPipe, /*, PipesComponent*/],
    bootstrap: [AppComponent]
})
export class AppModule {

}


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err) => console.error(err));;