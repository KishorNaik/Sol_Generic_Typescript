class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    public SetKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    public Display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.SetKeyValue(1, "Steve");
kvp1.Display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KeyValuePair<String, String>();
kvp2.SetKeyValue("CEO", "Bill"); 
kvp2.Display(); //Output: Key = CEO, Val = Bill