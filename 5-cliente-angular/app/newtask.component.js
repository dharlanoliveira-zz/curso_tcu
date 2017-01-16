"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var NewTaskComponent = (function () {
    function NewTaskComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        this.formModel = this.formBuilder.group({
            task: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        });
    };
    NewTaskComponent.prototype.newTask = function (form) {
        var task = form.task;
        console.log(task);
        this.router.navigate(['tasks']);
        //comando para criar a task
    };
    NewTaskComponent = __decorate([
        core_1.Component({
            selector: 'newtask',
            templateUrl: 'app/newtask.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router])
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=newtask.component.js.map