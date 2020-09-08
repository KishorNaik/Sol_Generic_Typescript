var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.SetKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.Display = function () {
        console.log("Key = " + this.key + ", val = " + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.SetKeyValue(1, "Steve");
kvp1.Display(); //Output: Key = 1, Val = Steve 
var kvp2 = new KeyValuePair();
kvp2.SetKeyValue("CEO", "Bill");
kvp2.Display(); //Output: Key = CEO, Val = Bill
