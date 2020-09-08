// function Types using Arrow Function Style
var funcCal = function (Value1, Value2) {
    return Value1 + Value2;
};
console.log(funcCal(2, 2));
// function types using Function Declaration
function Concat(firstName, lastName) {
    return firstName + " " + lastName;
}
var funcConcat = Concat;
console.log(funcConcat("kishor", "naik"));
//--------------------------------------------------------------------------------
var CustomerModel = /** @class */ (function () {
    function CustomerModel() {
    }
    return CustomerModel;
}());
var AddCustomer = /** @class */ (function () {
    function AddCustomer() {
    }
    AddCustomer.prototype.AddData = function (model) {
        console.log(model.firstName + " " + model.lastName);
        this.Test();
        return true;
    };
    AddCustomer.prototype.Test = function () {
        console.log("Test Method");
    };
    return AddCustomer;
}());
var addcustomer = new AddCustomer();
var customerModel = new CustomerModel();
customerModel.firstName = "Eshaan";
customerModel.lastName = "Naik";
addcustomer.AddData(customerModel);
