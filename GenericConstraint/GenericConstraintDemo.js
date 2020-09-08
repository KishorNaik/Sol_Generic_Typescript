"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Student_1 = require("./Student");
var GenericDemo = /** @class */ (function () {
    function GenericDemo() {
    }
    GenericDemo.prototype.Display = function (personObj) {
        console.log(personObj.FirstName + " " + personObj.LastName);
    };
    return GenericDemo;
}());
exports["default"] = GenericDemo;
var genericDemoObj = new GenericDemo();
var studentObj = new Student_1["default"]();
studentObj.FirstName = "Kishor";
studentObj.LastName = "Naik";
genericDemoObj.Display(studentObj);
var employeeObj = new Employee_1["default"]();
employeeObj.FirstName = "Eshaan";
employeeObj.LastName = "Naik";
genericDemoObj.Display(employeeObj);
