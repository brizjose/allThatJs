"use strict";
// abstract classes are meant to never be instantiated, only extended by more specialized classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// there are also abstract methods that provide type structures that are to be developed by the child classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.inflator = 0.05;
    }
    Project.prototype.calcBudget = function (n) {
        return n * this.inflator;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.payroll = function (n) {
        return n * 6;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
console.log(newProject.calcBudget(3));
console.log(newProject);
