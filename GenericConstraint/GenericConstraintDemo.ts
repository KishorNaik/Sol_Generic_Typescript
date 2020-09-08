import IPerson from "./IPerson";
import Employee from "./Employee";
import Student from "./Student";

export default class GenericDemo{

    Display<T extends IPerson>(personObj:T){

        console.log(`${personObj.FirstName} ${personObj.LastName}`);

    }
}


let genericDemoObj:GenericDemo=new GenericDemo();

let studentObj:Student =new Student();
studentObj.FirstName="Kishor";
studentObj.LastName="Naik";

genericDemoObj.Display<Student>(studentObj);


let employeeObj:Employee=new Employee();
    employeeObj.FirstName="Eshaan";
    employeeObj.LastName="Naik";

genericDemoObj.Display<Employee>(employeeObj);