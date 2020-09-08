interface IDemoFunctionType<T>{
    (Value1:T, Value2:T) : T
}

// function Types using Arrow Function Style

let funcCal:IDemoFunctionType<number>=(Value1:number, Value2:number)=>{
    return Value1 + Value2;
}


console.log(funcCal(2,2));

// function types using Function Declaration

function Concat(firstName:string,lastName:string) : String{

    return `${firstName} ${lastName}`;

}

let funcConcat:IDemoFunctionType<String>=Concat;
console.log(funcConcat("kishor","naik"));
//--------------------------------------------------------------------------------

class CustomerModel{
    firstName:String;
    lastName:String
}

interface IAdd<TModel,TResult>{
    AddData(model: TModel): TResult
}

interface IAddCustomer extends IAdd<CustomerModel,boolean>{

}

class AddCustomer implements IAddCustomer{

    public AddData(model: CustomerModel): boolean {
       console.log(`${model.firstName} ${model.lastName}`);
       this.Test();
       return true;
    }

    private Test(){
        console.log("Test Method");
    }

}


let addcustomer:AddCustomer=new AddCustomer();
let customerModel:CustomerModel=new CustomerModel();
customerModel.firstName="Eshaan";
customerModel.lastName="Naik";
addcustomer.AddData(customerModel);