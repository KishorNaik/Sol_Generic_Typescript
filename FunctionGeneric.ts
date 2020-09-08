function Cal<T>(value1:T, value2:T) : T{
 
    let result:any;
        result= (value1 as any) + (value2 as any);

    return result;
    
}

let resultNum:number=Cal<number>(10,20);
console.log(resultNum);

let resultString:String=Cal<String>("Kishor","Naik");
console.log(resultString);