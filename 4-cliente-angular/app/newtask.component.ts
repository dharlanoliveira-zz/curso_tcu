import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'newtask',
    templateUrl: 'app/newtask.html'
})
export class NewTaskComponent {
    private formModel: FormGroup;

    constructor(public formBuilder: FormBuilder, public router: Router) {

    }

    ngOnInit() {
        this.formModel = this.formBuilder.group({
            task: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        })
    }

    public newTask(form: any) {
        let task: string = form.task;
        console.log(task)
        this.router.navigate(['tasks']);
        //comando para criar a task
    }

}