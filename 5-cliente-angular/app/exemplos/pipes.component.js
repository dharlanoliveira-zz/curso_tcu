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
var PipesComponent = (function () {
    function PipesComponent() {
        this.percentual = 0.99;
        this.texto = "Este é Um Texto de Exemplo";
        this.dinheiro = 1453.66;
        this.data = new Date("October 13, 2014 11:13:00");
    }
    PipesComponent = __decorate([
        core_1.Component({
            selector: 'pipes',
            templateUrl: 'app/exemplos/pipes.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PipesComponent);
    return PipesComponent;
}());
exports.PipesComponent = PipesComponent;
//# sourceMappingURL=pipes.component.js.map